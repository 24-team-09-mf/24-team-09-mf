import type * as express from 'express'
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { routes } from './src/router/routes'
import { store } from './src/store'
import { GlobalStyle } from './src/global-styles'
import CheckAuthorizedPerson from './src/components/organisms/check-authorized-person'

type Args = {
  request: express.Request
}

export async function render({ request }: Args) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const remixRequest = createFetchRequest(request)
  const context = await query(remixRequest)

  if (context instanceof Response) {
    throw context
  }

  const sheet = new ServerStyleSheet()
  const router = createStaticRouter(dataRoutes, context)

  const html = renderToString(
    <StrictMode>
      <StyleSheetManager sheet={sheet.instance}>
        <Provider store={store}>
          <GlobalStyle />
          <StaticRouterProvider context={context} router={router} />
          <CheckAuthorizedPerson />
        </Provider>
      </StyleSheetManager>
    </StrictMode>
  )

  const css = sheet.getStyleTags()
  sheet.seal()

  return [html, css]
}

export function createFetchRequest(req: express.Request) {
  const origin = `${req.protocol}://${req.get('host')}`
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
