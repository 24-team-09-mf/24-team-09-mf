// lib
import * as yup from 'yup'

import { phoneRegExp, passwordRegExp, nameRegExp, loginRegExp } from './regExp'

export function nameScheme(message: string) {
  return yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(1, 'Поле должно содержать хотя бы один символ')
    .max(50, 'Поле может содердать максимум 50 символов')
    .matches(nameRegExp, message)
}

export function loginScheme(message: string) {
  return yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(1, 'Поле должно содержать хотя бы один символ')
    .max(50, 'Поле может содердать максимум 50 символов')
    .matches(loginRegExp, message)
}

export function emailScheme(message: string) {
  return yup.string().email(message).required('Введите e-mail')
}

export function phoneScheme(message: string) {
  return yup
    .string()
    .matches(phoneRegExp, message)
    .required('Поле "Ваш номер телефона" должно быть заполнено')
}

export function passwordScheme(message: string) {
  return yup
    .string()
    .trim()
    .required('Пожалуйста введите ваш пароль')
    .matches(passwordRegExp, message)
}

export function passwordNewScheme(oldPassword: string, message: string) {
  return yup
    .string()
    .trim()
    .required('Пожалуйста введите ваш пароль')
    .matches(passwordRegExp, message)
    .oneOf(
      [yup.ref(oldPassword), null],
      'Новый пароль не может совпадать со старым'
    )
}

export function avatarScheme() {
  return yup.mixed().optional()
}
