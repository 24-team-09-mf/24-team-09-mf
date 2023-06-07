import { generatePath } from 'react-router-dom'
import http, { ApiEndpoints } from '@/api/base'

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

const BACKEND_URL = 'http://localhost:3001/api/theme'

export const getSiteThemes = async () => {
  try {
    const response = await http.get(ApiEndpoints.Theme.getThemes, {
      baseURL: BACKEND_URL,
    })
    return response.data
  } catch (error) {
    console.log(error, 'Ошибка при получении тем сайта')
    return null
  }
}

export const getUserTheme = async (id: string) => {
  try {
    const response = await http.get(
      generatePath(ApiEndpoints.Theme.getUserTheme, { id }),
      { baseURL: BACKEND_URL }
    )
    return response.data
  } catch (error) {
    console.log(error, 'Ошибка при получении тем пользователя')
    return null
  }
}

interface IAddTheme {
  // id: string
  title: string
  // parent_id: number
  // user_id: number
  // updatedAt: number
  // createdAt: number
  // themesCount: number
  // user: Partial<User> | null
}

export const addUserTheme = async (data: IAddTheme) => {
  try {
    const response = await http.post(ApiEndpoints.Theme.addTheme, data, {
      baseURL: BACKEND_URL,
    })
    return response.data
  } catch (error) {
    console.log(error, 'Ошибка при добавлении темы')
    return null
  }
}
