import type { ReactNode, FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { userStore } from '@/store'

type Props = {
  children: ReactNode
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const location = useLocation()
  const { user } = userStore()

  const fromUrl = `${location.pathname}${location.search}`

  // if (!user?.login) {
  //   return <Navigate to={`/signin?fromUrl=${fromUrl}`} />
  // }

  return <>{children}</>
}

export default ProtectedRoute
