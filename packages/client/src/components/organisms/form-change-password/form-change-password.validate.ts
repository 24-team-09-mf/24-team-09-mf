// lib
import * as yup from 'yup'

import { passwordScheme, passwordNewScheme } from '../../../utils'

// types
import { FormPasswordValues } from './form-change-password.types'

const schema: yup.SchemaOf<FormPasswordValues> = yup.object().shape({

  passwordOld: passwordScheme(
    'Минимум 8 символов, должен включать цифры и латинские буквы'),

  passwordNew: passwordNewScheme('passwordOld',
    'Минимум 8 символов, должен включать цифры и латинские буквы'
  )
})

export default schema
