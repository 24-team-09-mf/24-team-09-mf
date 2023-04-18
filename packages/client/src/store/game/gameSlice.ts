import { createSlice } from '@reduxjs/toolkit'
import { gameStoreProps } from '@/store/game/types'

const initialState: gameStoreProps = {
  points: 0,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload
    },
  },
})

export const gameSliceActions = gameSlice.actions
export const gameSliceReducer = gameSlice.reducer
