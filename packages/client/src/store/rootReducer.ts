import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import gameSlice from './game/gameSlice'
import leaderboarSlice from './leaderboard/leaderboarSlice'

export const rootReducer = combineReducers({
  user: userSlice,
  game: gameSlice,
  leaderboard: leaderboarSlice,

})
