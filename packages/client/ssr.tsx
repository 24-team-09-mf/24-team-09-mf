import type * as express from 'express'
import { renderToString } from 'react-dom/server'
import { createStaticHandler } from '@remix-run/router'
import {
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { GlobalStyle } from './src/global-styles'
import * as React from 'react'
import { routes } from './src/router/routes'

const isDev = process.env.NODE_ENV === 'development'
// suppress useLayoutEffect (and its warnings) when not running in a browser
if (!isDev && typeof window === 'undefined') {
  // @ts-ignore
  React.useLayoutEffect = React.useEffect
}

export async function render(request: any) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const remixRequest = createFetchRequest(request)
  const context = await query(remixRequest)
  const sheet = new ServerStyleSheet()

  if (context instanceof Response) {
    throw context
  }

  const router = createStaticRouter(dataRoutes, context)

  const html = renderToString(
    <React.StrictMode>
      <StyleSheetManager sheet={sheet.instance}>
        <>
          <GlobalStyle />
          <Provider store={store}>
            <StaticRouterProvider
              router={router}
              context={context}
              nonce="the-nonce"
            />
          </Provider>
        </>
      </StyleSheetManager>
    </React.StrictMode>
  )
  const css = sheet.getStyleTags()

  sheet.seal()
  return [html, css]
}

export function createFetchRequest(req: express.Request): Request {
  const origin = `${req.protocol}://${req.get('host')}`
  // Note: This had to take originalUrl into account for presumably vite's proxying
  const url = new URL(req.originalUrl || req.url, origin)

  const controller = new AbortController()
  req.on('close', () => controller.abort())

  const headers = new Headers()

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value)
        }
      } else {
        headers.set(key, values)
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body
  }

  return new Request(url.href, init)
}
