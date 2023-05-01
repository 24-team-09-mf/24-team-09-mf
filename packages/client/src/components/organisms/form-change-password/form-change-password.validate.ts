// lib
import * as yup from 'yup'

import {
  passwordScheme,
  passwordNewScheme,
} from '../../../utils/validation/validationSchemes'

// types
import { FormPasswordValues } from './form-change-password.types'

const schema: yup.SchemaOf<FormPasswordValues> = yup.object().shape({
  oldPassword: passwordScheme(
    'Минимум 8 символов, должен включать цифры и латинские буквы'
  ),

  newPassword: passwordNewScheme(
    'oldPassword',
    'Минимум 8 символов, должен включать цифры и латинские буквы'
  ),
})

export default schema
