import Path from '@/router/path'
import type { RouteObject } from 'react-router-dom'

import { LayoutMain } from '@/components'
import ProtectedRoute from '@/router/utils/ProtectedRoute'
import { getUser } from '@/store/user/auth/actions'

export const routes: RouteObject[] = [
  {
    path: Path.DEFAULT,
    element: <LayoutMain />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/landing'),
        loader: () => {
          return getUser
        },
      },
      {
        path: Path.NOT_FOUND,
        lazy: () => import('@/pages/PageNotFound'),
      },
      {
        path: Path.ERROR_500,
        lazy: () => import('@/pages/ErrorPage'),
      },
      {
        path: Path.SIGN_IN,
        lazy: () => import('@/pages/signin'),
      },
      {
        path: Path.SIGN_UP,
        lazy: () => import('@/pages/signup'),
      },
      {
        path: Path.PROFILE,
        async lazy() {
          const { element } = await import('@/pages/profile')

          return { Component: () => <ProtectedRoute>{element}</ProtectedRoute> }
        },
      },
      {
        path: Path.CHANGE_PASSWORD,
        async lazy() {
          const { element } = await import('@/pages/change-password')

          return { Component: () => <ProtectedRoute>{element}</ProtectedRoute> }
        },
      },
      {
        path: Path.FORUM,
        lazy: () => import('@/pages/forum/forum-start'),
      },
      {
        path: Path.FORUM_ID,
        lazy: () => import('@/pages/forum/forum-section'),
      },
      {
        path: Path.FORUM_POST_PAGE,
        lazy: () => import('@/pages/forum/forum-post'),
      },
      {
        path: Path.STATISTICS,
        lazy: () => import('@/pages/statistics'),
      },
      {
        path: Path.GAME,
        lazy: () => import('@/pages/game'),
      },
    ],
  },
]
