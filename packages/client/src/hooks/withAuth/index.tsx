import { useEffect } from 'react'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { userStore, useAppDispatch } from '@/store'
import { getUser } from '@/store/user/auth/actions'

type WithAuthProps = {
  children: React.ReactElement
}

export const WithAuth: FC<WithAuthProps> = ({ children }) => {
  const { user } = userStore()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user?.login === '') {
      dispatch(getUser())
    }
  }, [user])

  return user?.login !== "" ? children : <Navigate to={'/'} />
}
