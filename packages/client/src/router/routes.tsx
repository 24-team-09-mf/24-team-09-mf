import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ErrorWrapper } from '@/components/layouts/error-wrapper'
import loadable from '@loadable/component'

const App = lazy(() => import('@/pages'))
const HelloWorld = lazy(() => import('@/pages/HelloWorld'))
const ErrorPage = lazy(() => import('@/pages/ErrorPage'))
const SignInPage = loadable(() => import('@/pages/signin'))
const SignUpPage = loadable(() => import('@/pages/signup'))

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
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/profile',
    // element: <ProfilePage />,
  },
  {
    path: '/statistics',
    // element: <StatisticsPage />,
  },
  {
    path: '/forum',
    // element: <ForumPage />,
  },
  {
    path: '/game',
    // element: <GamePage/>
  },
])
