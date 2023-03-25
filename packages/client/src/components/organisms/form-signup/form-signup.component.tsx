// custom hooks
import useSignUp from './form-signup.logics'

// styles
import * as S from './form-signup.styles'

export const FormSignUp = () => {
  const { register, onSubmitHandler, handleSubmit, errors, isValid } =
    useSignUp()

  return (
    <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.InputComponent
        isError={!!errors.first_name}
        errorMessage={errors.first_name?.message}
        {...register('first_name')}
        placeholder="имя"
      />
      <S.InputComponent
        isError={!!errors.second_name}
        errorMessage={errors.second_name?.message}
        {...register('second_name')}
        placeholder="фамилия"
      />
      <S.InputComponent
        isError={!!errors.login}
        errorMessage={errors.login?.message}
        {...register('login')}
        placeholder="логин"
      />
      <S.InputComponent
        isError={!!errors.email}
        errorMessage={errors.email?.message}
        {...register('email')}
        placeholder="email "
      />
      <S.InputComponent
        isError={!!errors.phone}
        errorMessage={errors.phone?.message}
        {...register('phone')}
        placeholder="телефон"
      />
      <S.InputComponent
        type="password"
        isError={!!errors.password}
        errorMessage={errors.password?.message}
        {...register('password')}
        placeholder="пароль"
      />

      <S.BtnSave
        as="button"
        type="submit"
        color="#579945"
        variant="contained"
        disabled={!isValid}>
        Зарегистрироваться
      </S.BtnSave>
    </S.Form>
  )
}
