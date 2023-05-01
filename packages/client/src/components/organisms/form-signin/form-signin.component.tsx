// custom hooks
import useSignIn from './form-signin.logics'

// styles
import { Form, InputComponent, BtnSave, BtnYandex } from './form-signin.styles'

export const FormSignIn = () => {
  const { register, onSubmitHandler, handleSubmit, handleOauth, errors, isValid } =
    useSignIn()

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <InputComponent
        isError={!!errors.login}
        errorMessage={errors.login?.message}
        dataTestId={'login'}
        {...register('login')}
        placeholder="Логин"
      />
      <InputComponent
        type="password"
        isError={!!errors.password}
        errorMessage={errors.password?.message}
        dataTestId={'password'}
        {...register('password')}
        placeholder="Пароль"
      />
      <BtnSave
        as="button"
        type="submit"
        color="#579945"
        variant="contained"
        disabled={!isValid}>
        Войти
      </BtnSave>
      <BtnYandex as="button" type="button" color="#579945" variant="outlined" onClick={handleOauth}>
        Авторизация через Яндекс
      </BtnYandex>
    </Form>
  )
}
