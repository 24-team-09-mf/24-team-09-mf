export interface User {
  id?: number | null
  first_name: string
  second_name: string
  display_name?: string
  login: string
  email: string
  phone: string
  avatar?: string
  status?: string
}

export interface SignIn {
  login: string
  password: string
}

export interface SignUp {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export interface ChangePassword {
  oldPassword: string
  newPassword: string
}

export interface UserState {
  user: User | null
  isLoading: boolean
  error?: string
}
