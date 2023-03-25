// components
import { FormSignUp } from '../../organisms'

// styles
import * as S from './signup.styles'

export const SignUp = () => {
  return (
    <S.Section>
      <S.Title>Регистрация</S.Title>
      <FormSignUp />
      <a href="/signin">
        <S.Btn color="#333333" variant="text">
          Вход
        </S.Btn>
      </a>
    </S.Section>
  )
}
