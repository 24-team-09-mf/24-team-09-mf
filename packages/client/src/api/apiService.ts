import axios from "axios"

import { IUserService } from "@/services/user/userService"
import { User } from "@/store/user/types"
import { ApiEndpoints } from "./base"

const REDIRECT_URL = 'http://localhost:3001'
const API_URL = `${REDIRECT_URL}/api/v2`

export class ApiService implements IUserService {
  async getUser(): Promise<User> {
    const { data } = await axios.get(`${API_URL}/${ApiEndpoints.Auth.UserInfo}`, {
      withCredentials: true
    })
    return data
  }
}
