// lib
import * as yup from 'yup'

import {
  loginScheme,
  passwordScheme,
} from '../../../utils/validation/validationSchemes'

// types
import { FormSignInValues } from './form-signin.types'

const schema: yup.SchemaOf<FormSignInValues> = yup.object().shape({
  login: loginScheme('Может содержать только латинские буквы'),
  password: passwordScheme(
    'Минимум 8 символов, должен включать цифры и латинские буквы'
  ),
})

export default schema
