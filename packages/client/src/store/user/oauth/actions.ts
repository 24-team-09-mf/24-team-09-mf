import { createAsyncThunk } from '@reduxjs/toolkit'
import { ServiceId } from '../types'
import http, { ApiEndpoints, RedirectUrl, OAuthUrl } from '@/api/base'

import { getUser } from '../auth/actions'

export const oAuthGetServiseId = createAsyncThunk(
  'oauth/oAuthGetServiseId',
  async (_, { rejectWithValue }) => {
    try {
      console.log('constants start: ------------')
      console.table({ RedirectUrl, OAuthUrl })
      console.log('constants end: ------------')
      const { data } = await http.get<ServiceId>(ApiEndpoints.Auth.ServiceId, {
        params: { redirect_uri: RedirectUrl },
      })

      console.log("data start: ----------------")
      console.table(data);
      console.log("data end: --------------------")

      const url = new URL(OAuthUrl)

      url.searchParams.set('client_id', data.service_id)
      RedirectUrl && url.searchParams.set('redirect_uri', RedirectUrl)
      console.log('url start: ----------')
      console.log(url);
      console.log('url end: -----------')
      // window.location.href = url.href
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
