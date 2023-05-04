import http, { ApiEndpoints } from '@/api/base'
import { TEAM_NAME } from '../constants/constants'
import { LeaderboardElementProps } from '@/components/organisms/leaderboard/leaderboard-types'

export interface ILeaderboard {
  score: number,
  name?: string,
  avatar?: string,
}

interface ILeaderboardResponse {
  data: Array<{
    data: LeaderboardElementProps,
  }>,
}

export const addLeaderboardItem = (data: ILeaderboard) => http.post(ApiEndpoints.Leaderboard.AddUser, {
  data,
  ratingFieldName: 'score',
  teamName: TEAM_NAME,
})

export const getLeaderboardList = (limit: number) => http.post(ApiEndpoints.Leaderboard.Leaderboard, {
  ratingFieldName: 'score',
  cursor: 0,
  limit,
}).then((response: ILeaderboardResponse) => response.data.map(({ data }) => data))
