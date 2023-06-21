import { createAsyncThunk } from '@reduxjs/toolkit'
import { ServiceId } from '../types'
import http, { ApiEndpoints, RedirectUrl, OAuthUrl } from '@/api/base'

import { getUser } from '../auth/actions'

export const oAuthGetServiseId = createAsyncThunk(
  'oauth/oAuthGetServiseId',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await http.get<ServiceId>(`${ApiEndpoints.Auth.ServiceId}?redirect_uri=${RedirectUrl}`)

      const url = new URL(OAuthUrl)

      url.searchParams.set('client_id', data.service_id)
      RedirectUrl && url.searchParams.set('redirect_uri', RedirectUrl)
      window.location.href = url.href
    } catch (e) {
      return rejectWithValue('OAuth авторизация: Ошибка получения id')
    }
  }
)

export const oAuthCodePost = createAsyncThunk(
  'oauth/oAuthCodePost',
  async (oauthCode: string, { dispatch, rejectWithValue }) => {
    try {
      await http.post<string>(ApiEndpoints.Auth.OAuth, {
        code: oauthCode,
        redirect_uri: RedirectUrl,
      })
      dispatch(getUser())
    } catch (error) {
      return rejectWithValue('Ошибка OAuth авторизации')
    }
  }
)
