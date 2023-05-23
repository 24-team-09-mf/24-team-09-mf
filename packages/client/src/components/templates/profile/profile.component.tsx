// lib
import { useNavigate, Link } from 'react-router-dom'

// redux
import { useAppDispatch } from '@/store'
import { signOut } from '@/store/user/auth/actions'

// components
import { Button } from '../../atoms'
import { FormProfile } from '../../organisms'

// styles
import { Section } from './profile.styles'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onHandleClick = async () => {
    await dispatch(signOut())
    navigate('/signin')
  }

  return (
    <Section>
      <FormProfile />
      <Link to="/change-password">
        <Button color="#333333" variant="text">
          Изменить пароль
        </Button>
      </Link>
      <Button color="#C22020" variant="text" onClick={onHandleClick}>
        Выход
      </Button>
    </Section>
  )
}
