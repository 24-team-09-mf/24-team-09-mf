import { useAppDispatch } from '@/store'
import { getUser } from '@/store/user/auth/actions'

const dispatch = useAppDispatch()

export const initialize = () => {
  dispatch(getUser())
}
