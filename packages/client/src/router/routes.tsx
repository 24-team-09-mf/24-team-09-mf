import React from "react"
import { createBrowserRouter } from "react-router-dom"

const App = React.lazy(() => import('@/pages'))
const HelloWorld = React.lazy(() => import('@/pages/HelloWorld'))
const SignInPage = React.lazy(() => import('@/pages/signin'))
const SignUpPage = React.lazy(() => import('@/pages/signup'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/hello',
    element: <HelloWorld/>
  },
  {
    path: '/signin',
    element: <SignInPage/>
  },
  {
    path: '/signup',
    element: <SignUpPage/>
  }
]) 