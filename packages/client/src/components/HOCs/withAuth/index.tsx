import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { userStore } from '@/store'

type WithAuthProps = {
  children: React.ReactElement
}

type Props = FC<WithAuthProps>

export const WithAuth: Props = ({ children }) => {
  const { user } = userStore()

  return user ? children : <Navigate to={'/'} />
}
