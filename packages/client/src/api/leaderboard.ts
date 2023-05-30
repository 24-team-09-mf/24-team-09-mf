import { createAsyncThunk } from '@reduxjs/toolkit'
import http, { ApiEndpoints } from '@/api/base'
import { TEAM_NAME } from '../constants/constants'
import { LeaderboardElementProps } from '@/components/organisms/leaderboard/leaderboard-types'

export interface ILeaderboard {
  score: number
  name?: string
  avatar?: string
}

export const addLeaderboardItem = createAsyncThunk(
  'leaderboard/add',
  async (data: ILeaderboard, { rejectWithValue }) => {
    try {
      await http.post(ApiEndpoints.Leaderboard.AddUser, {
        data,
        ratingFieldName: 'score',
        teamName: TEAM_NAME,
      })
    } catch (e) {
      return rejectWithValue('Ошибка при добавлении данных в таблицу лидеров')
    }
  }
)

export const getLeaderboardList = createAsyncThunk(
  'leaderboard/getList',
  async (limit: number, { rejectWithValue }) => {
    try {
      const response = await http.post(ApiEndpoints.Leaderboard.Leaderboard, {
        ratingFieldName: 'score',
        cursor: 0,
        limit,
      })
      return response.data.map(
        ({ data }: { data: LeaderboardElementProps }) => data
      )
    } catch (e) {
      return rejectWithValue('Ошибка при получении списка лидеров')
    }
  }
)
