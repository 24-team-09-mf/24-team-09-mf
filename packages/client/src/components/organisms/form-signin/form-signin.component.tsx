// custom hooks
import useSignIn from './form-signin.logics'

// styles
import * as S from './form-signin.styles'

export const FormSignIn = () => {
  const { register, onSubmitHandler, handleSubmit, errors, isValid } =
    useSignIn()

  return (
    <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.InputComponent
        isError={!!errors.login}
        errorMessage={errors.login?.message}
        {...register('login')}
        placeholder="email"
      />
      <S.InputComponent
        type="password"
        isError={!!errors.password}
        errorMessage={errors.password?.message}
        {...register('password')}
        placeholder="Пароль"
      />

      <S.BtnSave
        as="button"
        type="submit"
        color="#579945"
        variant="contained"
        disabled={!isValid}>
        Войти
      </S.BtnSave>
    </S.Form>
  )
}
