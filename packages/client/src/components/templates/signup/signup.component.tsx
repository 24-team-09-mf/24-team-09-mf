// lib
import { Link } from 'react-router-dom'

// components
import { Button } from '../../atoms'
import { FormSignUp } from '../../organisms'

// styles
import { Section, Title } from './signup.styles'

export const SignUp = () => {
  return (
    <Section>
      <Title>Регистрация</Title>
      <FormSignUp />
      <Link to="/signin">
        <Button color="#333333" variant="text">
          Вход
        </Button>
      </Link>
    </Section>
  )
}
