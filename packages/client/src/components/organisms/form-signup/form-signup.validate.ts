// lib
import * as yup from 'yup'

// types
import { FormSignUpValues } from './form-signup.types'

const phoneRegExp =
  // eslint-disable-next-line no-useless-escape
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

const schema: yup.SchemaOf<FormSignUpValues> = yup.object().shape({
  first_name: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(1, 'Поле должно содержать хотя бы один символ')
    .max(50, 'Поле может содердать максимум 50 символов'),
  second_name: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(1, 'Поле должно содержать хотя бы один символ')
    .max(50, 'Поле может содердать максимум 50 символов'),
  login: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(1, 'Поле должно содержать хотя бы один символ')
    .max(50, 'Поле может содердать максимум 50 символов'),
  email: yup
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
  phone: yup
    .string()
    .matches(phoneRegExp, 'Введите верный телефонный номер')
    .required('Поле "Ваш номер телефона" должно быть заполнено'),
})

export default schema
