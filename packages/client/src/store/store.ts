import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

import { User, UserState } from '@/store/user/types'

export interface IInitialStore {
  user: UserState
  game: any
}

export interface IStoreServices {
  user: {
    getUser(): Promise<User>
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
