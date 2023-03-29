// lib
import * as yup from 'yup'

// types
import { FormPasswordValues } from './form-change-password.types'

const schema: yup.SchemaOf<FormPasswordValues> = yup.object().shape({

  passwordOld: yup
    .string()
    .trim()
    .required('Пожалуйста введите ваш пароль')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Минимум 8 символов, должен включать цифры и латинские буквы'
    ),

  passwordNew: yup
    .string()
    .trim()
    .required('Пожалуйста введите ваш пароль')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Минимум 8 символов, должен включать цифры и латинские буквы'
    )
})

export default schema
