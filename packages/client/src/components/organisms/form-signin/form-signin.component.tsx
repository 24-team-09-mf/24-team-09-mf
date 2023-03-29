// custom hooks
import useSignIn from './form-signin.logics'

// styles
import { Form, InputComponent, BtnSave } from './form-signin.styles'

export const FormSignIn = () => {
  const { register, onSubmitHandler, handleSubmit, errors, isValid } =
    useSignIn()

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <InputComponent
        isError={!!errors.login}
        errorMessage={errors.login?.message}
        {...register('login')}
        placeholder="email"
      />
      <InputComponent
        type="password"
        isError={!!errors.password}
        errorMessage={errors.password?.message}
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
    </Form>
  )
}
