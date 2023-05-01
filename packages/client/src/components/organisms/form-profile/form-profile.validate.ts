// lib
import * as yup from 'yup'

import {
  emailScheme,
  phoneScheme,
  nameScheme,
  loginScheme,
  avatarScheme,
} from '../../../utils/validation/validationSchemes'

// types
import { FormProfileValues } from './form-profile.types'

const schema: yup.SchemaOf<FormProfileValues> = yup.object().shape({
  first_name: nameScheme('Правильно заполните поле'),
  second_name: nameScheme('Правильно заполните поле'),
  display_name: loginScheme('Правильно заполните поле'),
  login: loginScheme('Может содержать только латинские буквы'),
  email: emailScheme('Введите валидный email-адрес'),
  phone: phoneScheme('Введите верный телефонный номер'),
  avatar: avatarScheme(),
})

export default schema
