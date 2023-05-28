import { createSlice } from '@reduxjs/toolkit'
import { themeGetSiteThemes, themeGetUserTheme, themeAddUserTheme } from './actions'
import { ThemeStore } from './types'

const initialState: ThemeStore = {
  themes: {
    items: [],
    error: '',
  },
  userTheme: {
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
        state.themes.error = ''
        state.themes.items = action.payload
      })
      .addCase(themeGetSiteThemes.rejected, (state, action) => {
        state.themes.error = action.payload as string
      })
      // UserTheme
      .addCase(themeGetUserTheme.fulfilled, (state, action) => {
        state.userTheme.error = ''
        state.userTheme.items = action.payload
      })
      .addCase(themeGetUserTheme.rejected, (state, action) => {
        state.userTheme.error = action.payload as string
      })
      // Add Theme
      .addCase(themeAddUserTheme.fulfilled, (state, action) => {
        state.userTheme.error = ''
        state.userTheme.items = [...state.userTheme.items, action.payload]
      })
      .addCase(themeAddUserTheme.rejected, (state, action) => {
        state.userTheme.error = action.payload as string
      })
  },
})

export default themeSlice.reducer
