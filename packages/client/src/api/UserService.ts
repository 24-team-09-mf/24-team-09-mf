import axios from 'axios'

import { SignIn, User } from '@/store/user/types'

import { ApiEndpoints } from './base'

export class UserService {
  // Методы авторизации
  async getUser(): Promise<User> {
    const { data } = await axios.get(ApiEndpoints.Auth.UserInfo, {
      withCredentials: true,
    })
    return data
  }

  async signIn(signinData: SignIn): Promise<User> {
    const { data } = await axios.post(ApiEndpoints.Auth.SignIn, signinData)
    return {
      ...data,
    }
  }

  async logout(): Promise<null> {
    await axios.post(ApiEndpoints.Auth.SignOut)
    return null
  }
}
