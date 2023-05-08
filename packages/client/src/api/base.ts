import axios from 'axios'

export const BaseUrl = 'https://ya-praktikum.tech/api/v2/'
export const AvatarUrl = 'https://ya-praktikum.tech/api/v2/resources'
export const OAuthUrl = 'https://oauth.yandex.ru/authorize?response_type=code'
export const RedirectUrl = process.env.VITE_OAUTH_REDIRECT_URL

export const ApiEndpoints = {
  Auth: {
    SignIn: 'auth/signin',
    SignUp: 'auth/signup',
    SignOut: 'auth/logout',
    UserInfo: 'auth/user',
    OAuth: 'oauth/yandex',
    ServiceId: 'oauth/yandex/service-id',
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
