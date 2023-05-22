import axios from 'axios'

import { SignIn, User } from '@/store/user/types'
import { ApiEndpoints } from './base'

const NODE_API_URL = process.env.NODE_API_URL

export class AuthService {
  async getUser(): Promise<User> {
    const { data } = await axios.get(
      `${NODE_API_URL}/api/v2/${ApiEndpoints.Auth.UserInfo}`,
      {
        withCredentials: true,
      }
    )
    return data
  }
  async signIn(signinData: SignIn): Promise<User> {
    const { data } = await axios.post(
      `${NODE_API_URL}/api/v2/${ApiEndpoints.Auth.SignIn}`,
      signinData
    )
    return {
      ...data,
    }
  }
  async logout(): Promise<null> {
    await axios.post(`${NODE_API_URL}/api/v2/${ApiEndpoints.Auth.SignOut}`)
    return null
  }
}
