import axios from 'axios'

const API_ROOT = 'https://ya-praktikum.tech/api/v2'

export class ApiRepository {
  constructor(private _cookiesHeader: string | undefined) {}

  async getUser(): Promise<any> {
    const { data } = await axios.get(`${API_ROOT}/auth/user`, {
      headers: {
        cookie: this._cookiesHeader,
      },
    })
    return {
      ...data,
    }
  }
  async signIn(signinData: { login: string; password: string }): Promise<any> {
    const { data } = await axios.post(`${API_ROOT}/auth/signin`, signinData)
    return {
      ...data,
    }
  }
  async logout(): Promise<null> {
    await axios.post(`${API_ROOT}/auth/signin`)
    return null
  }

  async addLeaderboardItem(data: any): Promise<any> {
    const response = await axios.post(`${API_ROOT}/leaderboard`, data)
    return {
      ...response.data,
    }
  }

  async getLeaderboardList(data: any): Promise<any> {
    try {
      const response = await axios.post(`${API_ROOT}/leaderboard/team09`, data, { headers: {
        cookie: this._cookiesHeader,
      }})
      return response.data
    } catch (e) {
      console.log(e);
    }
  }
}
