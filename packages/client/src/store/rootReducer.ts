import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import { gameSliceReducer } from '@/store/game/gameSlice'

export const rootReducer = combineReducers({
  user: userSlice,
  game: gameSliceReducer,
})
