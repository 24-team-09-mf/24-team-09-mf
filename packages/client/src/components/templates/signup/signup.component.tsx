// components
import { FormSignUp } from '../../organisms'

// styles
import { Section, Title, Btn, LinkComponent } from './signup.styles'

export const SignUp = () => {
  return (
    <Section>
      <Title>Регистрация</Title>
      <FormSignUp />
      <LinkComponent to="/signin">
        <Btn color="#333333" variant="text">
          Вход
        </Btn>
      </LinkComponent>
    </Section>
  )
}
