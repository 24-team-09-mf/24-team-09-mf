import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { userStore } from '@/store'

type WithAuthProps = {
  children: React.ReactElement
}

export const WithAuth: FC<WithAuthProps> = ({ children }) => {
  const { user } = userStore()

  return user ? children : <Navigate to={'/'} />
}
