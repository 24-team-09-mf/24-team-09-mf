import { createAsyncThunk } from '@reduxjs/toolkit'
import http, { ApiEndpoints } from '@/api/base'
import { SignIn, SignUp, User } from '../types'

export const getUser = createAsyncThunk(
  'user/getuser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get<User>(ApiEndpoints.Auth.UserInfo)
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при получении данных пользователя')
    }
  }
)

export const signIn = createAsyncThunk(
  'user/signin',
  async (signinData: SignIn, { rejectWithValue }) => {
    try {
      await http.post(ApiEndpoints.Auth.SignIn, signinData)
    } catch (e) {
      return rejectWithValue('Ошибка авторизации')
    }
  }
)

export const signUp = createAsyncThunk(
  'user/signup',
  async (signupData: SignUp, { rejectWithValue }) => {
    try {
      await http.post(ApiEndpoints.Auth.SignUp, signupData)
    } catch (e) {
      return rejectWithValue('Ошибка регистрации')
    }
  }
)

export const signOut = createAsyncThunk(
  'user/signout',
  async (_, { rejectWithValue }) => {
    try {
      await http.post(ApiEndpoints.Auth.SignOut)
      return null
    } catch (e) {
      return rejectWithValue('Ошибка выхода из приложения')
    }
  }
)
