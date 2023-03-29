import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import loadable from '@loadable/component'

const App = lazy(() => import('@/pages'))
const HelloWorld = lazy(() => import('@/pages/HelloWorld'))
const SignInPage = loadable(() => import('@/pages/signin'))
const SignUpPage = loadable(() => import('@/pages/signup'))
const ProfilePage = loadable(() => import('@/pages/profile'))
const ChangePasswordPage = loadable(() => import('@/pages/change-password'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/hello',
    element: <HelloWorld />,
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
    element: <ProfilePage />,
  },
  {
    path: '/change-password',
    element: <ChangePasswordPage />,
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
