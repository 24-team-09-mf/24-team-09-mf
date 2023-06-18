import axios from 'axios'

import { TEAM_NAME } from '../constants/constants'

export const AvatarUrl = 'https://ya-praktikum.tech/api/v2/resources'
export const OAuthUrl = 'https://oauth.yandex.ru/authorize?response_type=code'
export const RedirectUrl = process.env.OAUTH_REDIRECT_URL

export const ApiEndpoints = {
  Auth: {
    SignIn: '/api/v2/auth/signin',
    SignUp: '/api/v2/auth/signup',
    SignOut: '/api/v2/auth/logout',
    UserInfo: '/api/v2/auth/user',
    OAuth: 'oauth/yandex',
    ServiceId: 'oauth/yandex/service-id',
  },
  User: {
    UpdateProfile: '/api/v2/user/profile',
    UpdatePassword: '/api/v2/user/password',
    UpdateProfileAvatar: '/api/v2/user/profile/avatar',
    Search: '/api/v2/user/search',
  },
  Leaderboard: {
    AddUser: '/api/v2/leaderboard',
    Leaderboard: `/api/v2/leaderboard/${TEAM_NAME}`,
  },
  Theme: {
    getThemes: '/',
    getUserTheme: '/user-theme/:id',
    addTheme: '/user-theme',
  },
  Forum: {
    getCategories: '/api/forum/',
    getTopics: '/api/forum/topics/:id',
    getPosts: '/api/forum/posts/:id',
    getEmoji: '/api/forum/emojis/:emojiName',
    addPost: '/api/forum/post',
    addTopic: '/api/forum/topic',
    addEmoji: '/api/forum/emoji',
    deleteEmoji: '/api/forum/emoji/delete',
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
