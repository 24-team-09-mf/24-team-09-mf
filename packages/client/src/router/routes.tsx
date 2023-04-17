import { createBrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorWrapper } from '@/components/layouts/error-wrapper'
import loadable from '@loadable/component'
import { WithAuth } from '@/hooks/withAuth'

import { LayoutMain } from '@/components'

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

export const Router = () => (
  <Routes>
    <Route element={<LayoutMain />}>
      <Route path="/landing" element={<LandingPage />} />
    </Route>
  </Routes>
)

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
          <WithAuth>
            <ProfilePage />
          </WithAuth>
        ),
      },
      {
        path: '/change-password',
        element: (
          <WithAuth>
            <ChangePasswordPage />
          </WithAuth>
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
        element: <StatisticsPage />,
      },
      {
        path: '/game',
        element: <GamePage />,
      },
    ],
  },
])
