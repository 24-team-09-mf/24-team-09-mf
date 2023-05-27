import { createSlice } from '@reduxjs/toolkit'
import { themeGetSiteThemes, themeGetUserTheme, themeAddTheme } from './actions'
import { ThemeStore } from './types'

const initialState: ThemeStore = {
  thems: {
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
        state.thems.error = ''
        state.thems.items = action.payload
      })
      .addCase(themeGetSiteThemes.rejected, (state, action) => {
        state.thems.error = action.payload as string
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
      .addCase(themeAddTheme.fulfilled, (state, action) => {
        state.thems.error = ''
        state.thems.items = [...state.thems.items, action.payload]
      })
      .addCase(themeAddTheme.rejected, (state, action) => {
        state.thems.error = action.payload as string
      })
  },
})

export default themeSlice.reducer
