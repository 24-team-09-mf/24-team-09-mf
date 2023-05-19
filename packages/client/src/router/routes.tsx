import Path from '@/router/path'
import type { RouteObject } from 'react-router-dom'

import { LayoutMain } from '@/components'
import ProtectedRoute from '@/router/utils/ProtectedRoute'

export const routes: RouteObject[] = [
  {
    path: Path.DEFAULT,
    element: <LayoutMain />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/landing'),
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
        async lazy() {
          const { element } = await import('@/pages/forum/forum-start')

          return { Component: () => <ProtectedRoute>{element}</ProtectedRoute> }
        },
      },
      {
        path: Path.FORUM_ID,
        async lazy() {
          const { element } = await import('@/pages/forum/forum-section')

          return { Component: () => <ProtectedRoute>{element}</ProtectedRoute> }
        },
      },
      {
        path: Path.FORUM_POST_PAGE,
        async lazy() {
          const { element } = await import('@/pages/forum/forum-post')

          return { Component: () => <ProtectedRoute>{element}</ProtectedRoute> }
        },
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
