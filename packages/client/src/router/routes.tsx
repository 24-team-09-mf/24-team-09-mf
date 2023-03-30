import { createBrowserRouter } from 'react-router-dom'
import { ErrorWrapper } from '@/components/layouts/error-wrapper'
import loadable from '@loadable/component'

const App = loadable(() => import('@/pages'))
const SignInPage = loadable(() => import('@/pages/signin'))
const SignUpPage = loadable(() => import('@/pages/signup'))
const ProfilePage = loadable(() => import('@/pages/profile'))
const ChangePasswordPage = loadable(() => import('@/pages/change-password'))
const GamePage = loadable(() => import('@/pages/game'));

// Необходимо обернуть каждую новую страницу в ErrorWrapper за исключением страниц ошибок
export const router = createBrowserRouter([
  {
    path: '/',
    element: <ErrorWrapper><App /></ErrorWrapper>,
  },
  {
    path: '/500',
    // element: <ErrorPage />
  },
  {
    path: '/signin',
    element: <ErrorWrapper><SignInPage /></ErrorWrapper>,
  },
  {
    path: '/signup',
    element: <ErrorWrapper><SignUpPage /></ErrorWrapper>,
  },
  {
    path: '/profile',
    element: <ErrorWrapper><ProfilePage /></ErrorWrapper>,
  },
  {
    path: '/change-password',
    element: <ErrorWrapper><ChangePasswordPage /></ErrorWrapper>,
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
    element: <ErrorWrapper><GamePage /></ErrorWrapper>
  },
])
