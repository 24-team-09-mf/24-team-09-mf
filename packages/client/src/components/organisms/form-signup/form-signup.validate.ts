// lib
import * as yup from 'yup'

import {
  emailScheme,
  phoneScheme,
  nameScheme,
  loginScheme,
  passwordScheme,
} from '../../../utils/validation/validationSchemes'

// types
import { FormSignUpValues } from './form-signup.types'

const schema: yup.SchemaOf<FormSignUpValues> = yup.object().shape({
  first_name: nameScheme('Правильно заполните поле'),
  second_name: nameScheme('Правильно заполните поле'),
  login: loginScheme('Может содержать только латинские буквы и цифры'),
  email: emailScheme('Введите валидный email-адрес'),
  phone: phoneScheme('Введите верный телефонный номер'),
  password: passwordScheme(
    'Минимум 8 символов, должен включать цифры и латинские буквы'
  ),
})

export default schema
