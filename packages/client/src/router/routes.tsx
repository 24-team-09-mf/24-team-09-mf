import { createBrowserRouter } from 'react-router-dom'
import { ErrorWrapper } from '@/components/layouts/error-wrapper'
import loadable from '@loadable/component'

import { LayoutMain } from '@/components'
import ProtectedRoute from './utils/ProtectedRoute'

const ErrorPage = loadable(() => import('@/pages/ErrorPage'))
const PageNotFound = loadable(() => import('@/pages/PageNotFound'))
const SignInPage = loadable(() => import('@/pages/signin'))
const SignUpPage = loadable(() => import('@/pages/signup'))
const ProfilePage = loadable(() => import('@/pages/profile'))
const ChangePasswordPage = loadable(() => import('@/pages/change-password'))
const GamePage = loadable(() => import('@/pages/game'))
const ForumPage = loadable(() => import('@/pages/forum/forum-start'))
const ForumSectionPage = loadable(() => import('@/pages/forum/forum-section'))
const ForumPostPage = loadable(() => import('@/pages/forum/forum-post'))
const LandingPage = loadable(() => import('@/pages/landing'))
const StatisticsPage = loadable(() => import('@/pages/statistics'))

export const router = createBrowserRouter([
  {
    element: (
      <ErrorWrapper>
        <LayoutMain />
      </ErrorWrapper>
    ),
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/500',
        element: <ErrorPage />,
      },
      {
        path: '/*',
        element: <PageNotFound />,
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
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/change-password',
        element: (
          <ProtectedRoute>
            <ChangePasswordPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/forum',
        element: <ForumPage />,
      },
      {
        path: `/forum/:id`,
        element: <ForumSectionPage />,
      },
      {
        path: `/forum/:id/:postPageId`,
        element: <ForumPostPage />,
      },
      {
        path: '/statistics',
        element: (
          <ProtectedRoute>
            <StatisticsPage />
          </ProtectedRoute>),
      },
      {
        path: '/game',
        element: <GamePage />,
      },
    ],
  },
])
