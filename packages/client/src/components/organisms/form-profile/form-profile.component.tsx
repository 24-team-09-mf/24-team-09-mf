// custom hooks
import useProfile from './form-profile.logics'

// styles
import { Form, InputComponent, BtnSave, AvatarComponent, AvatarLabel } from './form-profile.styles'

export const FormProfile = () => {
  const { register, onSubmitHandler, handleSubmit, errors, isValid } = useProfile()

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <AvatarComponent
        {...register('avatar')}
      />
      <AvatarLabel
        color="#579945"
        fontSize="26px"
      >ivanivanov</AvatarLabel>
      <InputComponent
        defaultValue="Ivan"
        isError={!!errors.first_name}
        errorMessage={errors.first_name?.message}
        {...register('first_name')}
        placeholder="Имя"
      />
      <InputComponent
        defaultValue="Ivanov"
        isError={!!errors.second_name}
        errorMessage={errors.second_name?.message}
        {...register('second_name')}
        placeholder="Фамилия"
      />
      <InputComponent
        defaultValue="ivanivanov"
        isError={!!errors.login}
        errorMessage={errors.login?.message}
        {...register('login')}
        placeholder="Логин"
      />
      <InputComponent
        defaultValue="ivanivanov@mail.com"
        isError={!!errors.email}
        errorMessage={errors.email?.message}
        {...register('email')}
        placeholder="Email"
      />
      <InputComponent
        defaultValue="+79607689451"
        isError={!!errors.phone}
        errorMessage={errors.phone?.message}
        {...register('phone')}
        placeholder="Телефон"
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
