import axios from 'axios'

import { User } from '@/store/user/types'
import { ApiEndpoints } from './base'

export class ApiService {
  async getUser(): Promise<User> {
    const { data } = await axios.get(
      `http://localhost:3001/api/v2/${ApiEndpoints.Auth.UserInfo}`,
      {
        withCredentials: true,
      }
    )
    return data
  }
}
