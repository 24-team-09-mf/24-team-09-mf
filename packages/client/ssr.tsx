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

import { ApiService } from './src/services/apiService'

type Args = {
  request: express.Request
  repositories: {
    user: any
    leaderboard: any
  }
  nonce: string
}

import { getUser } from './src/store/user/auth/actions'
import { getLeaderboardList } from './src/store/leaderboard/actions'
import { matchRoutes } from 'react-router-dom'
import { LeaderboardService } from './src/services/leaderboardService'

// Loader данных для страницы
const getDataForRoute = async (path: string, dispatch: AppDispatch) => {
  await dispatch(getUser())
  if (path === 'statistics') {
    await dispatch(getLeaderboardList(10))
  }
}

const getCurrentPath = (pathname: string) => {
  if (pathname === undefined) return routes[0]
  const match = matchRoutes(routes, pathname)?.find(
    item => pathname === item.pathnameBase
  )
  return match?.route
}

export async function render({ request, repositories, nonce }: Args) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const remixRequest = createFetchRequest(request)

  const apiServices = {
    user: new ApiService(repositories.user),
    leaderboard: new LeaderboardService(repositories.leaderboard),
  }

  const store = createStore(apiServices)
  const route = getCurrentPath(request.baseUrl)
  const context = await query(remixRequest)

  if (route && route.path) {
    await getDataForRoute(route.path, store.dispatch)
  }

  if (context instanceof Response) {
    throw context
  }

  const sheet = new ServerStyleSheet()
  const router = createStaticRouter(dataRoutes, context)
  const initialState = store.getState()

  const html = renderToString(
    <StrictMode>
      <StyleSheetManager sheet={sheet.instance}>
        <Provider store={store}>
          <GlobalStyle />
          <StaticRouterProvider
            context={context}
            router={router}
            nonce={nonce}
          />
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
