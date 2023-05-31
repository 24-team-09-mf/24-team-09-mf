import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import gameSlice from './game/gameSlice'
import leaderboarSlice from './leaderboard/leaderboarSlice'
import themeSlice from "./siteTheme/slice"

export const rootReducer = combineReducers({
  user: userSlice,
  game: gameSlice,
  leaderboard: leaderboarSlice,
  theme: themeSlice,
})
