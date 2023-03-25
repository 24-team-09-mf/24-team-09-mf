import React from "react"
import { createBrowserRouter } from "react-router-dom"

const App = React.lazy(() => import('@/pages'))
const HelloWorld = React.lazy(() => import('@/pages/HelloWorld'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/hello',
    element: <HelloWorld/>
  }
])