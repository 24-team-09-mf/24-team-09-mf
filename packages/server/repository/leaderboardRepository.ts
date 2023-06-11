import axios from 'axios'

const API_ROOT = 'https://ya-praktikum.tech/api/v2'

export class LeaderboardRepository {
  constructor(private _cookiesHeader: string | undefined) {}

  async addLeaderboardItem(data: any): Promise<any> {
    try {
      const response = await axios.post(`${API_ROOT}/leaderboard`, data)
      return {
        ...response.data,
      }
    } catch (e) {
      console.error(e)
    }
  }

  async getLeaderboardList(data: any): Promise<any> {
    try {
      const response = await axios.post(
        `${API_ROOT}/leaderboard/team09`,
        data,
        {
          headers: {
            cookie: this._cookiesHeader,
          },
        }
      )
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
}
