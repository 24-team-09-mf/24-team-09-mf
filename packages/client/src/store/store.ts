import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

import { SignIn, User, UserState } from '@/store/user/types'
import { IGame } from './game/types'
import { LeaderboardState } from './leaderboard/leaderboarSlice'
import { ForumStore } from './forum/types'
import { IAddLeaderboard, IGetLeaderboard } from './leaderboard/types'
import { LeaderboardElementProps } from '@/components/organisms/leaderboard/leaderboard-types'

export interface IInitialStore {
  user: UserState
  game: IGame
  leaderboard: LeaderboardState
  forum: ForumStore
}

export interface IStoreServices {
  user: {
    getUser(): Promise<User>
    signIn(signInData: SignIn): Promise<User>
    logout(): Promise<null>
    // Убрать any
    addLeaderboardItem(data: IAddLeaderboard): Promise<LeaderboardElementProps>
    getLeaderboardList(
      data: IGetLeaderboard
    ): Promise<{ data: LeaderboardElementProps }[]>
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
