import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  matchRoutes,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from '@/router/routes'
import { GlobalStyle } from '@/global-styles'
import CheckAuthorizedPerson from '@/components/organisms/check-authorized-person'
import { store } from './store'

const startServiceWorker = () => {
  // TODO изменить расположение файлов и добавить sw
  // if ('serviceWorker' in navigator && import.meta.env.MODE === 'production') {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('./sw.js').then()
  //   })
  // }
}

const requestNotificationPermission = () => {
  const permission = window.Notification.requestPermission()
}

startServiceWorker()
requestNotificationPermission()

hydrate()
async function hydrate() {
  const lazyMatches = matchRoutes(routes, window.location)?.filter(
    m => m.route.lazy
  )

  if (lazyMatches && lazyMatches?.length > 0) {
    await Promise.all(
      lazyMatches.map(async m => {
        const routeModule = await m.route.lazy?.()
        Object.assign(m.route, { ...routeModule, lazy: undefined })
      })
    )
  }

  const router = createBrowserRouter(routes)

  ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} fallbackElement={null} />
        <CheckAuthorizedPerson />
      </Provider>
    </React.StrictMode>
  )
}
