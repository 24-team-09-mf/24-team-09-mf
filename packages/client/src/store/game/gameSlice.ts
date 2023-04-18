import { createSlice } from '@reduxjs/toolkit'
import { gameStoreProps } from '@/store/game/types'

const initialState: gameStoreProps = {
  points: null,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetPoints: state => {
      state.points = 0
    },
    setPoints: (state, action) => {
      state.points = action.payload
    },
  },
})

export const gameSliceActions = gameSlice.actions
export const gameSliceReducer = gameSlice.reducer
