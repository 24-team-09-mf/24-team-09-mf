import axios from 'axios'

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
