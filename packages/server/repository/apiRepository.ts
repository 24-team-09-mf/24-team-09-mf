import axios from "axios";

const API_ROOT = 'https://ya-practicum.tech/api/v2'

export class ApiRepository {
  constructor(private _cookiesHeader: string | undefined){}

  async getUser(): Promise<any> {
    const {data} = await axios.get(`${API_ROOT}/auth/user`, {
      headers: {
        cookie: this._cookiesHeader
      }
    })
    return {
      ...data
    }
  }
}