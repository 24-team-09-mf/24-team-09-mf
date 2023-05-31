import { createSlice } from '@reduxjs/toolkit'
import { themeGetSiteThemes, themeGetUserTheme, themeAddUserTheme } from './actions'
import { ThemeStore } from './types'

const initialState: ThemeStore = {
  themes: {
    isLoading: true,
    items: [],
    error: '',
  },
  userTheme: {
    isLoading: true,
    items: [],
    error: '',
  },
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Themes
      .addCase(themeGetSiteThemes.fulfilled, (state, action) => {
        state.themes.isLoading = false
        state.themes.error = ''
        state.themes.items = action.payload
      })
      .addCase(themeGetSiteThemes.pending, state => {
        state.themes.isLoading = true
      })
      .addCase(themeGetSiteThemes.rejected, (state, action) => {
        state.themes.isLoading = false
        state.themes.error = action.payload as string
      })
      // UserTheme
      .addCase(themeGetUserTheme.fulfilled, (state, action) => {
        state.userTheme.isLoading = false
        state.userTheme.error = ''
        state.userTheme.items = action.payload
      })
      .addCase(themeGetUserTheme.pending, state => {
        state.userTheme.isLoading = true
      })
      .addCase(themeGetUserTheme.rejected, (state, action) => {
        state.userTheme.isLoading = false
        state.userTheme.error = action.payload as string
      })
      // Add Theme
      .addCase(themeAddUserTheme.fulfilled, (state, action) => {
        state.userTheme.isLoading = false
        state.userTheme.error = ''
        state.userTheme.items = [...state.userTheme.items, action.payload]
      })
      .addCase(themeAddUserTheme.pending, state => {
        state.userTheme.isLoading = true
      })
      .addCase(themeAddUserTheme.rejected, (state, action) => {
        state.userTheme.isLoading = false
        state.userTheme.error = action.payload as string
      })
  },
})

export default themeSlice.reducer
