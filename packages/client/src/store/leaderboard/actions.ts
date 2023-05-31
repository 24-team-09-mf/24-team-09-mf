import { createAsyncThunk } from '@reduxjs/toolkit'
// import { TEAM_NAME } from '../../constants/constants'
import { LeaderboardElementProps } from '@/components/organisms/leaderboard/leaderboard-types'
import { IStoreServices } from '@/store/store'

import { IAddLeaderboard, IGetLeaderboard } from './types'

export const addLeaderboardItem = createAsyncThunk(
  'leaderboard/add',
  async (data: IAddLeaderboard, { extra, rejectWithValue }) => {
    try {
      const service = extra as IStoreServices
      await service.user.addLeaderboardItem(data)
    } catch (e) {
      return rejectWithValue('Ошибка при добавлении данных в таблицу лидеров')
    }
  }
)

export const getLeaderboardList = createAsyncThunk(
  'leaderboard/getList',
  async (limit: IGetLeaderboard['limit'], { extra, rejectWithValue }) => {
    try {
      const service = extra as IStoreServices

      const response = await service.user.getLeaderboardList({
        ratingFieldName: 'score',
        cursor: 0,
        limit,
      })
      const preparedData = response.map(
        ({ data }: { data: LeaderboardElementProps }) => data
      )
      return preparedData
    } catch (e) {
      return rejectWithValue('Ошибка при получении списка лидеров')
    }
  }
)
