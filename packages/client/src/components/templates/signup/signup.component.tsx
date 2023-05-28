// lib
import { Link } from 'react-router-dom'

// components
import { FormSignUp } from '../../organisms'

// styles
import { Section, Title, SignInBtn } from './signup.styles'

export const SignUp = () => {
  return (
    <Section>
      <Title>Регистрация</Title>
      <FormSignUp />
      <Link to="/signin">
        <SignInBtn color="#333" variant="text">Вход</SignInBtn>
      </Link>
    </Section>
  )
}
