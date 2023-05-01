import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
  lives: 1,
}
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeScore: (state, action) => {
      state.score += action.payload
    },
    resetScore: state => {
      state.score = 0
    },
    resetLives: state => {
      state.lives = 1
    },
    changeLives: (state, action) => {
      state.lives += action.payload
    },
  },
})

export const { changeScore, changeLives, resetScore, resetLives } =
  gameSlice.actions

export default gameSlice.reducer
