// lib
import { Link } from 'react-router-dom'

// components
import { Button } from '../../atoms'
import { FormSignIn } from '../../organisms'

// styles
import { Section, Title } from './signin.styles'

export const SignIn = () => {
  return (
    <Section>
      <Title>Авторизация</Title>
      <FormSignIn />
      <Link to="/signup">
        <Button color="#333333" variant="text">
          Еще не зарегистрированы?
        </Button>
      </Link>
    </Section>
  )
}
