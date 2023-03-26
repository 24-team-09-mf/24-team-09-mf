// custom hooks
import useSignUp from './form-signup.logics'

// styles
import { Form, InputComponent, BtnSave } from './form-signup.styles'

export const FormSignUp = () => {
  const { register, onSubmitHandler, handleSubmit, errors, isValid } =
    useSignUp()

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <InputComponent
        isError={!!errors.first_name}
        errorMessage={errors.first_name?.message}
        {...register('first_name')}
        placeholder="имя"
      />
      <InputComponent
        isError={!!errors.second_name}
        errorMessage={errors.second_name?.message}
        {...register('second_name')}
        placeholder="фамилия"
      />
      <InputComponent
        isError={!!errors.login}
        errorMessage={errors.login?.message}
        {...register('login')}
        placeholder="логин"
      />
      <InputComponent
        isError={!!errors.email}
        errorMessage={errors.email?.message}
        {...register('email')}
        placeholder="email "
      />
      <InputComponent
        isError={!!errors.phone}
        errorMessage={errors.phone?.message}
        {...register('phone')}
        placeholder="телефон"
      />
      <InputComponent
        type="password"
        isError={!!errors.password}
        errorMessage={errors.password?.message}
        {...register('password')}
        placeholder="пароль"
      />

      <BtnSave
        as="button"
        type="submit"
        color="#579945"
        variant="contained"
        disabled={!isValid}>
        Зарегистрироваться
      </BtnSave>
    </Form>
  )
}
