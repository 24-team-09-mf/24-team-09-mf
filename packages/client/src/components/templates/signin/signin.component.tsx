// components
import { FormSignIn } from '../../organisms'

// styles
import { Section, Title, Btn, LinkComponent } from './signin.styles'

export const SignIn = () => {
  return (
    <Section>
      <Title>Авторизация</Title>
      <FormSignIn />
      <LinkComponent to="/signup">
        <Btn color="#333333" variant="text">
          Еще не зарегистрированы?
        </Btn>
      </LinkComponent>
    </Section>
  )
}
