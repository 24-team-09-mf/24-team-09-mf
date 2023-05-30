import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'
import express from 'express'
import cookieParser from 'cookie-parser'
import { createProxyMiddleware } from 'http-proxy-middleware'
import jsesc from 'jsesc'
import { installGlobals } from '@remix-run/node'
import { Image } from 'canvas'
import { dbConnect } from './db'
import { apiRouter } from './src/routes'

import { ApiRepository } from './repository/apiRepository'
import * as process from 'process'

const isDev = process.env.NODE_ENV === 'development'
const app = express()
const port = Number(process.env.SERVER_PORT) || 3001


if (isDev) {
  dotenv.config({ path: '../.env.dev' })
} else {
  dotenv.config()
}

console.log(process.env);

async function startServer() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  global.Image = Image
  installGlobals()

  app.use(cors())

  await dbConnect()
  // Использовать до express.json()
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

  let vite: ViteDevServer
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrClientPath = require.resolve('client/dist-ssr/client.cjs')
  let srcPath = ''
  if (isDev) {
    srcPath = path.dirname(require.resolve('client/ssr.tsx'))
  }

  if (isDev) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
    app.use('/sw.js', express.static(path.resolve(distPath, 'sw.js')))
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  app.use('*', cookieParser(), async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template: string
      let render: (args: {
        request: express.Request
        repository: any
      }) => Promise<[string, string, object]>

      if (isDev) {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .render
      } else {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
        render = (await import(ssrClientPath)).render
      }

      try {
        const [appHtml, css, initialState] = await render({
          request: req,
          repository: new ApiRepository(req.headers['cookie']),
        })

        const initialStateSerialized = initialState && jsesc(initialState)
        const html = template
          .replace('<!--ssr-body-->', appHtml)
          .replace(`<!--ssr-styles-->`, css)
          .replace(
            '<!--ssr-initialState-->',
            `<script>window.__INITIAL_STATE__ = ${initialStateSerialized}</script>`
          )

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
      if (isDev) {
        vite.ssrFixStacktrace(error as Error)
      }
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
