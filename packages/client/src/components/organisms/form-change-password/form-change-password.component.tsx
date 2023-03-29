// custom hooks
import useChangePassword from './form-change-password.logics'

// styles
import { Form, InputComponent, BtnSave } from './form-change-password.styles'

export const FormChangePassword = () => {
  const { register, onSubmitHandler, handleSubmit, errors, isValid } =
    useChangePassword()

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <InputComponent
        type="password"
        isError={!!errors.passwordOld}
        errorMessage={errors.passwordOld?.message}
        {...register('passwordOld')}
        placeholder="Старый пароль"
      />
      <InputComponent
        type="password"
        isError={!!errors.passwordNew}
        errorMessage={errors.passwordNew?.message}
        {...register('passwordNew')}
        placeholder="Новый пароль"
      />
      <BtnSave
        as="button"
        type="submit"
        color="#579945"
        variant="contained"
        disabled={!isValid}>
        Сохранить
      </BtnSave>
    </Form>
  )
}
