import { HTMLAttributes } from 'react'

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  isError?: boolean
  disabled?: boolean
  type?: 'email' | 'password' | 'text' | 'number'
  dataTestId?: string
}
