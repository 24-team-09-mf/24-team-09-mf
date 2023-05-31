import axios from 'axios'

import { SignIn, User } from '@/store/user/types'
import { LeaderboardElementProps } from '@/components/organisms/leaderboard/leaderboard-types'
import { IAddLeaderboard, IGetLeaderboard } from '@/store/leaderboard/types'

import { ApiEndpoints } from './base'

export class UserService {
  async getUser(): Promise<User> {
    const { data } = await axios.get(`/api/v2/${ApiEndpoints.Auth.UserInfo}`, {
      withCredentials: true,
    })
    return data
  }

  async signIn(signinData: SignIn): Promise<User> {
    const { data } = await axios.post(
      `/api/v2/${ApiEndpoints.Auth.SignIn}`,
      signinData
    )
    return {
      ...data,
    }
  }

  async logout(): Promise<null> {
    await axios.post(`/api/v2/${ApiEndpoints.Auth.SignOut}`)
    return null
  }

  async addLeaderboardItem(
    data: IAddLeaderboard
  ): Promise<LeaderboardElementProps> {
    const response = await axios.post(
      `/api/v2/${ApiEndpoints.Leaderboard.AddUser}`,
      { data, ratingFieldName: 'score', teamName: 'team09' }
    )
    return {
      ...response.data,
    }
  }

  async getLeaderboardList(
    data: IGetLeaderboard
  ): Promise<{data: LeaderboardElementProps}[]> {
    const response = await axios.post(
      `/api/v2/${ApiEndpoints.Leaderboard.Leaderboard}`,
      data
    )
    return response.data
  }
}
