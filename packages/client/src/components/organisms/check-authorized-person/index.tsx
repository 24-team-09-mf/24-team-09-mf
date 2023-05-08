import { useEffect } from 'react'
import { useAppDispatch } from '@/store'
import { getUser } from '@/store/user/auth/actions'

export default () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser())
  })

  return null
}
