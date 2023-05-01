interface User {
  first_name?: string
  second_name?: string
  display_name?: string
  login?: string
  email?: string
  phone?: string
}

export const generateDefaultValues = (user: User | null): User => {
  const keys: (keyof User)[] = [
    'first_name',
    'second_name',
    'display_name',
    'login',
    'email',
    'phone',
  ]
  const defaultValues: User = {}
  for (const key of keys) {
    defaultValues[key] = user?.[key] || ''
  }
  return defaultValues
}
