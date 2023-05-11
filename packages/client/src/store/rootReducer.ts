import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import gameSlice from './game/gameSlice'

export const rootReducer = combineReducers({
  user: userSlice,
  game: gameSlice,
})
