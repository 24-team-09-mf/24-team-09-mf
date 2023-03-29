// lib
import { Link } from 'react-router-dom'

// components
import { Button } from '../../atoms'
import { FormChangePassword } from '../../organisms'

// styles
import { Section, Title } from './change-password.styles'

export const ChangePassword = () => {
  return (
    <Section>
      <Title>Изменить пароль </Title>
      <FormChangePassword />
      <Link to="/profile">
        <Button color="#333333" variant="text">
          Отмена
        </Button>
      </Link>
    </Section>
  )
}
