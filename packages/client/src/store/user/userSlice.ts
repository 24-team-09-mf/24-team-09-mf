import { createSlice } from '@reduxjs/toolkit'
import { getUser, signIn, signOut, signUp } from './auth/actions'
import { updateAvatar, updatePassword, updateProfile } from './profile/actions'
import { UserState } from './types'

const initialState: UserState = {
  user: null,
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
        state.user = action.payload
      })
      .addCase(getUser.pending, state => {
        state.isLoading = true
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.user = action.payload
      })
      .addCase(updateProfile.pending, state => {
        state.isLoading = true
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.user = action.payload
      })
      .addCase(updateAvatar.pending, state => {
        state.isLoading = true
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.user = action.payload
      })
      .addCase(updatePassword.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.user = action.payload
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
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.user = action.payload
      })
      .addCase(signUp.pending, state => {
        state.isLoading = true
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
  },
})

export default userSlice.reducer
