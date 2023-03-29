// lib
import { Link } from 'react-router-dom'

// components
import { Button } from '../../atoms'
import { FormProfile } from '../../organisms'

// styles
import { Section } from './profile.styles'

export const Profile = () => {
  return (
    <Section>
      <FormProfile />

      <Link to="/change-password">
        <Button color="#333333" variant="text">
          Изменить пароль
        </Button>
      </Link>

      <Link to="/signin">
        <Button color="#C22020" variant="text">
          Выход
        </Button>
      </Link>
    </Section>
  )
}
