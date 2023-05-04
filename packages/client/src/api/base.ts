import axios from 'axios'
import { TEAM_NAME } from "@/constants/constants"

export const BaseUrl = 'https://ya-praktikum.tech/api/v2/'
export const AvatarUrl = 'https://ya-praktikum.tech/api/v2/resources/'

export const ApiEndpoints = {
  Auth: {
    SignIn: 'auth/signin',
    SignUp: 'auth/signup',
    SignOut: 'auth/logout',
    UserInfo: 'auth/user',
  },
  User: {
    UpdateProfile: 'user/profile',
    UpdatePassword: 'user/password',
    UpdateProfileAvatar: 'user/profile/avatar',
    Search: 'user/search',
  },
  Leaderboard: {
    AddUser: '/leaderboard',
    Leaderboard: `/leaderboard/${TEAM_NAME}`
  }
}

const http = axios.create({
  baseURL: BaseUrl,
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default http
