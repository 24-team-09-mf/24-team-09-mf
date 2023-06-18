import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import { createProxyMiddleware } from 'http-proxy-middleware'
import jsesc from 'jsesc'
import crypto from 'crypto'

import { dbConnect } from './db'
import { apiRouter } from './src/routes'

import { ApiRepository } from './repository/apiRepository'
import { LeaderboardRepository } from './repository/leaderboardRepository'
import dev from './mode/dev'
import prod from './mode/prod'
import polyfills from './polyfills'

const isDev = process.env.NODE_ENV === 'development'
const app = express()
const port = Number(process.env.SERVER_PORT) || 3001
const nonce = crypto.randomBytes(16).toString('base64')

if (isDev) {
  dotenv.config({
    path: path.resolve(__dirname, '..', '..', 'configs', '.env.dev'),
    override: true,
  })
} else {
  dotenv.config()
}

async function startServer() {
  await polyfills()
  app.use(cors())
  await dbConnect()

  // CSP Policy
  app.use(function (_req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      `default-src 'self'; font-src 'self' data:; img-src 'self' * data:; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'; frame-src 'self'`
    )
    next()
  })

  // Proxy Использовать до express.json()
  app.use(
    '/api/v2',
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: 'localhost',
      target: 'https://ya-praktikum.tech',
    })
  )

  app.use(express.json())
  app.use('/api', apiRouter)

  const configuration = isDev ? dev(app) : prod(app)

  await configuration.preload()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  app.use('*', cookieParser(), async (req, res, next) => {
    const url = req.originalUrl

    try {
      const [template, render] = await configuration.resolve(url)
      try {
        const [appHtml, css, initialState] = await render({
          request: req,
          repositories: {
            user: new ApiRepository(req.headers['cookie']),
            leaderboard: new LeaderboardRepository(req.headers['cookie']),
          },
        })

        const initialStateSerialized = initialState && jsesc(initialState)
        const html = template
          .replace('<!--ssr-body-->', appHtml)
          .replace(`<!--ssr-styles-->`, css)
          .replace(
            '<!--ssr-initialState-->',
            `<script nonce="${nonce}">window.__INITIAL_STATE__ = ${initialStateSerialized}</script>`
          )
          .replace('__SERVER_NONCE__', nonce)

        res.setHeader('Content-Type', 'text/html')
        res.status(200).end(html)
      } catch (e) {
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          return res.redirect(e.status, e.headers.get('Location') as string)
        }
        throw e
      }
      next()
    } catch (error) {
      configuration.catchError(error)
      next(error)
    }
  })
}

startServer().then(() => {
  app.listen(port, () => {
    let message = `  ➜ Server is listening on port: ${port} http://localhost:${port}`
    message += isDev ? ' --development mode' : ' --production mode'
    console.log(message)
  })
})
