import { createAsyncThunk } from '@reduxjs/toolkit'
import { generatePath } from 'react-router-dom'

import http, { ApiEndpoints } from '@/api/base'
import { User } from '../user/types'

const BACKEND_URL = 'http://localhost:3001/api/theme'

export const themeGetSiteThemes = createAsyncThunk(
  'themes-get-site-themes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get(ApiEndpoints.Theme.getThemes, {
        baseURL: BACKEND_URL,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при получении тем сайта')
    }
  }
)

export const themeGetUserTheme = createAsyncThunk(
  'themes-get-user-theme',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await http.get(
        generatePath(ApiEndpoints.Theme.getUserTheme, { id }),
        { baseURL: BACKEND_URL }
      )
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при получении тем пользователя')
    }
  }
)

interface IAddTheme {
  id: string
  title: string
  parent_id: number
  user_id: number
  updatedAt: number
  createdAt: number
  themesCount: number
  user: Partial<User> | null
}

export const themeAddUserTheme = createAsyncThunk(
  'themes-add-theme',
  async (data: IAddTheme, { rejectWithValue }) => {
    try {
      const response = await http.post(ApiEndpoints.Theme.addTheme, data, {
        baseURL: BACKEND_URL,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при добавлении темы')
    }
  }
)
