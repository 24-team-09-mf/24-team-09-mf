import axios from "axios"

import { IUserService } from "@/services/user/userService"
import { User } from "@/store/user/types"
import { ApiEndpoints } from "./base"

export class ApiService implements IUserService {
  async getUser(): Promise<User> {
    const { data } = await axios.get(`http://:localhost:3001/${ApiEndpoints.Auth.UserInfo}`, {
      withCredentials: true
    })
    return data
  }
}
