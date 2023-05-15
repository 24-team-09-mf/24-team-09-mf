import { createAsyncThunk } from '@reduxjs/toolkit'
import http, { ApiEndpoints } from '@/api/base'
import { SignIn, SignUp } from '../types'
import { IStoreServices } from '@/store/store'

export const getUser = createAsyncThunk(
  'user/getuser',
  async (_, { rejectWithValue, extra }) => {
    try {
      const service = extra as IStoreServices
      const data = await service.user.getUser()
      return data
    } catch (error) {
      console.error(error)
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
