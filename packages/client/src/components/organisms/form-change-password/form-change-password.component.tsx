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
        isError={!!errors.oldPassword}
        errorMessage={errors.oldPassword?.message}
        {...register('oldPassword')}
        placeholder="Старый пароль"
      />
      <InputComponent
        type="password"
        isError={!!errors.newPassword}
        errorMessage={errors.newPassword?.message}
        {...register('newPassword')}
        placeholder="Новый пароль"
      />
      <BtnSave
        as="button"
        type="submit"
        color="#579945"
        variant="contained"
        // disabled={!isValid}
      >
        Сохранить
      </BtnSave>
    </Form>
  )
}
