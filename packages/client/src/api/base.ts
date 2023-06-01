import axios from 'axios'
import { TEAM_NAME } from '../constants/constants'

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
    UpdateProfile: 'api/v2/user/profile',
    UpdatePassword: 'api/v2/user/password',
    UpdateProfileAvatar: 'api/v2/user/profile/avatar',
    Search: 'api/v2/user/search',
  },
  Leaderboard: {
    AddUser: 'leaderboard',
    Leaderboard: `leaderboard/${TEAM_NAME}`,
  },
  Forum: {
    getCategories: '/',
    getTopics: '/topics/:id',
    getPosts: '/posts/:id',
    addPost: '/post',
    addTopic: '/topic',
  },
}

const http = axios.create({
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default http
