import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import gameSlice from './game/gameSlice'
import leaderboarsSlice from './leaderboard/leaderboarsSlice'

export const rootReducer = combineReducers({
  user: userSlice,
  game: gameSlice,
  leaderboard: leaderboarsSlice,
})
