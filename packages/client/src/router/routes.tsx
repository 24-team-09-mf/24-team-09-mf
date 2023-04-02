import { createBrowserRouter } from 'react-router-dom'
import { ErrorWrapper } from '@/components/layouts/error-wrapper'
import loadable from '@loadable/component'

const App = loadable(() => import('@/pages'))
const ErrorPage = loadable(() => import('@/pages/ErrorPage'))
const PageNotFound = loadable(() => import('@/pages/PageNotFound'))
const SignInPage = loadable(() => import('@/pages/signin'))
const SignUpPage = loadable(() => import('@/pages/signup'))
const ProfilePage = loadable(() => import('@/pages/profile'))
const ChangePasswordPage = loadable(() => import('@/pages/change-password'))
const ForumPage = loadable(() => import('@/pages/forum/forum-start'))
const ForumSectionPage = loadable(() => import('@/pages/forum/forum-section'))
const ForumPostPage = loadable(() => import('@/pages/forum/forum-post'))
const StatisticsPage = loadable(() => import('@/pages/statistics'))

// Необходимо обернуть каждую новую страницу в ErrorWrapper за исключением страниц ошибок
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorWrapper>
        <App />
      </ErrorWrapper>
    ),
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
    element: (
      <ErrorWrapper>
        <SignInPage />
      </ErrorWrapper>
    ),
  },
  {
    path: '/signup',
    element: (
      <ErrorWrapper>
        <SignUpPage />
      </ErrorWrapper>
    ),
  },
  {
    path: '/profile',
    element: (
      <ErrorWrapper>
        <ProfilePage />
      </ErrorWrapper>
    ),
  },
  {
    path: '/change-password',
    element: (
      <ErrorWrapper>
        <ChangePasswordPage />
      </ErrorWrapper>
    ),
  },
  {
    path: '/forum',
    element: (
      <ErrorWrapper>
        <ForumPage />
      </ErrorWrapper>
    ),
  },
  {
    path: `/forum/:id`,
    element: (
      <ErrorWrapper>
        <ForumSectionPage />
      </ErrorWrapper>
    ),
  },
  {
    path: `/forum/:id/:postPageId`,
    element: (
      <ErrorWrapper>
        <ForumPostPage />
      </ErrorWrapper>
    ),
  },
  {
    path: '/statistics',
    element: (
      <ErrorWrapper>
        <StatisticsPage />
      </ErrorWrapper>
    ),
  },
  {
    path: '/game',
    // element: <GamePage/>
  },
])
