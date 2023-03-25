// components
import { FormSignIn } from '../../organisms'

// styles
import * as S from './signin.styles'

export const SignIn = () => {
  return (
    <S.Section>
      <S.Title>Авторизация</S.Title>
      <FormSignIn />
      <a href="/signup">
        <S.Btn color="#333333" variant="text">
          Еще не зарегистрированы?
        </S.Btn>
      </a>
    </S.Section>
  )
}
