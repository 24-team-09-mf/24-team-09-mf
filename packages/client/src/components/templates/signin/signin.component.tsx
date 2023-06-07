// lib
import { Link } from 'react-router-dom'

// components
import { FormSignIn } from '../../organisms'

// styles
import { Section, Title, SignUpBtn } from './signin.styles'

export const SignIn = () => {
  return (
    <Section>
      <Title>Авторизация</Title>
      <FormSignIn />
      <Link to="/signup">
        <SignUpBtn color="#333333" variant="text">
          Еще не зарегистрированы?
        </SignUpBtn>
      </Link>
    </Section>
  )
}
