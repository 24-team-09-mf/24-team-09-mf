import { createAsyncThunk } from '@reduxjs/toolkit'
import http, { ApiEndpoints } from '@/api/base'
import { User, ChangePassword } from '../types'

export const updateProfile = createAsyncThunk(
  'user/changeProfile',
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await http.put<User>(
        ApiEndpoints.User.UpdateProfile,
        data
      )
      return response.data
    } catch (e) {
      return rejectWithValue('Ошибка при обновлении данных пользователя')
    }
  }
)

export const updatePassword = createAsyncThunk(
  'user/changePassword',
  async (data: ChangePassword, { rejectWithValue }) => {
    try {
      const response = await http.put<User>(
        ApiEndpoints.User.UpdatePassword,
        data
      )
      return response.data
    } catch (e) {
      return rejectWithValue('Ошибка при обновлении пароля')
    }
  }
)

export const updateAvatar = createAsyncThunk(
  'user/changeAvatar',
  async (data: FormData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const response = await http.put<User>(
        ApiEndpoints.User.UpdateProfileAvatar,
        data,
        config
      )
      return response.data
    } catch (e) {
      return rejectWithValue('Ошибка при обновлении аватара пользователя')
    }
  }
)
