import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'

import App from './App'

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

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
