import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { ErrorWrapper } from '@/components/layouts/error-wrapper'
import { ErrorPage } from '@/pages/ErrorPage'

const App = React.lazy(() => import('@/pages'))
const HelloWorld = React.lazy(() => import('@/pages/HelloWorld'))

// Необходимо обернуть каждую новую страницу в ErrorWrapper за исключением страниц ошибок
export const router = createBrowserRouter([
  {
    path: '/',
    element:<ErrorWrapper><App /></ErrorWrapper>,
  },
  {
    path: '/hello',
    element: <ErrorWrapper><HelloWorld/></ErrorWrapper>
  },
  {
    path: '/500',
    element: <ErrorPage />
  }
])
