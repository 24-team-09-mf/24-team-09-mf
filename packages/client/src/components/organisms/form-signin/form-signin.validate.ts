// lib
import * as yup from 'yup'

// types
import { FormSignInValues } from './form-signin.types'

const schema: yup.SchemaOf<FormSignInValues> = yup.object().shape({
  login: yup
    .string()
    .email('Введите валидный email-адрес')
    .required('Это обязательное поле'),
  password: yup
    .string()
    .trim()
    .required('Пожалуйста введите ваш пароль')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Минимум 8 символов, должен включать цифры и латинские буквы'
    ),
})

export default schema
