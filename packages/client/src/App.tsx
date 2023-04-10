import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './router/routes'

import { GlobalStyle } from './global-styles'

const startServiceWorker = () => {
  if ('serviceWorker' in navigator && import.meta.env.MODE === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then()
    })
  }
}

const requestNotificationPermission = () => {
  const permission = window.Notification.requestPermission()
}

startServiceWorker()
requestNotificationPermission()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
