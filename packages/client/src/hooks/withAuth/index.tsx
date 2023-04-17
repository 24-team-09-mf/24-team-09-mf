import { useEffect, useState } from 'react'
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
  const [isAuth, setIsAuth] = useState(true)

  useEffect(() => {
    if (!user?.login) {
      dispatch(getUser()).then(res => {
        if (res.payload === 'Ошибка при получении данных пользователя') {
          setIsAuth(false)
        }
      })
    }
  }, [user, isAuth])

  return isAuth ? children : <Navigate to={'/'} />
}
