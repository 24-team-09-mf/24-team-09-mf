import { createSlice } from '@reduxjs/toolkit'
import { getUser, signIn, signOut, signUp } from './auth/actions'
import { oAuthGetServiseId, oAuthCodePost } from './oauth/actions'
import { updateAvatar, updatePassword, updateProfile } from './profile/actions'
import { UserState } from './types'
import { AvatarUrl } from '@/api/base'

import avatarDefault from '@/assets/images/avatarDefault.png'

const initialState: UserState = {
  user: {
    id: null,
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: '',
    avatar: `${avatarDefault}`,
    status: '',
  },
  isLoading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.user = {
          ...action.payload,
          avatar: action.payload.avatar
            ? `${AvatarUrl}${action.payload.avatar}`
            : initialState.user?.avatar,
        }
      })
      .addCase(getUser.pending, state => {
        state.isLoading = true
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updateProfile.fulfilled, state => {
        state.isLoading = false
        state.error = ''
      })
      .addCase(updateProfile.pending, state => {
        state.isLoading = true
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updateAvatar.fulfilled, state => {
        state.isLoading = false
        state.error = ''
      })
      .addCase(updateAvatar.pending, state => {
        state.isLoading = true
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updatePassword.fulfilled, state => {
        state.isLoading = false
        state.error = ''
      })
      .addCase(updatePassword.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(signIn.fulfilled, state => {
        state.isLoading = false
        state.error = ''
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.user = action.payload
      })
      .addCase(signOut.pending, state => {
        state.isLoading = true
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
      .addCase(signUp.fulfilled, state => {
        state.isLoading = false
        state.error = ''
      })
      .addCase(signUp.pending, state => {
        state.isLoading = true
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })

      .addCase(oAuthGetServiseId.fulfilled, state => {
        state.isLoading = false
        state.error = ''
      })
      .addCase(oAuthGetServiseId.pending, state => {
        state.isLoading = true
      })
      .addCase(oAuthGetServiseId.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })

      .addCase(oAuthCodePost.fulfilled, state => {
        state.isLoading = false
        state.error = ''
      })
      .addCase(oAuthCodePost.pending, state => {
        state.isLoading = true
      })
      .addCase(oAuthCodePost.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
  },
})

export default userSlice.reducer
