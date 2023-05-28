import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

import { SignIn, User, UserState } from '@/store/user/types'
import { IGame } from './game/types'
import { LeaderboardState } from './leaderboard/leaderboarSlice'
import { ThemeStore } from './siteTheme/types'

export interface IInitialStore {
  user: UserState
  game: IGame
  leaderboard: LeaderboardState
  theme: ThemeStore
}

export interface IStoreServices {
  user: {
    getUser(): Promise<User>
    signIn(signInData: SignIn): Promise<User>
    logout(): Promise<null>
  }
}

export function createStore(
  service: IStoreServices,
  initialState?: IInitialStore
) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleWare => {
      return getDefaultMiddleWare({
        thunk: {
          extraArgument: service,
        },
      })
    },
  })
  return store
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
