import axios from 'axios'
import { IAddLeaderboard, IGetLeaderboard } from '@/store/leaderboard/types'
import { LeaderboardElementProps } from '@/components/organisms/leaderboard/leaderboard-types'
import { ApiEndpoints } from '@/api/base'

export class LeaderboardApiService {
  async addLeaderboardItem(
    data: IAddLeaderboard
  ): Promise<LeaderboardElementProps> {
    const response = await axios.post(ApiEndpoints.Leaderboard.AddUser, {
      data,
      ratingFieldName: 'score',
      teamName: 'team09',
    })
    return {
      ...response.data,
    }
  }

  async getLeaderboardList(
    data: IGetLeaderboard
  ): Promise<{ data: LeaderboardElementProps }[]> {
    const response = await axios.post(
      ApiEndpoints.Leaderboard.Leaderboard,
      data
    )
    return response.data
  }
}
