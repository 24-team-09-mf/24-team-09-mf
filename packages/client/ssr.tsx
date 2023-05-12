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
import { AppDispatch, createStore } from './src/store'
import { GlobalStyle } from './src/global-styles'
import CheckAuthorizedPerson from './src/components/organisms/check-authorized-person'

import { UserService } from './src/services/user/userService'

type Args = {
  request: express.Request,
  repository: any
}

import Path from './src/router/path'
import { getUser } from './src/store/user/auth/actions'

// Loader данных для страницы 
const getDataForRoute = async (path: string, dispatch: AppDispatch) => {
  if (path === Path.DEFAULT) {
    dispatch(getUser())
  }
}

export async function render({ request, repository }: Args) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const remixRequest = createFetchRequest(request)
  const store = createStore(new UserService(repository))
  const route = routes.find(page => page.path === request.originalUrl)
  const context = await query(remixRequest)

  if (route && route.path) {
    getDataForRoute(route.path, store.dispatch)
  }

  if (context instanceof Response) {
    throw context
  }

  const sheet = new ServerStyleSheet()
  const router = createStaticRouter(dataRoutes, context)
  const initialState = store.getState()

  console.log('initialState', { initialState })

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

  return [html, css, initialState]
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
