import { createAsyncThunk } from '@reduxjs/toolkit'
import { generatePath } from 'react-router-dom'

import http, { ApiEndpoints } from '@/api/base'
import { User } from '../user/types'

const BACKEND_URL = 'http://localhost:3001/api/forum'

export const forumGetCategories = createAsyncThunk(
  'forum-get-categories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get(ApiEndpoints.Forum.getCategories, {
        baseURL: BACKEND_URL,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при получении категорий форума')
    }
  }
)

export const forumGetTopics = createAsyncThunk(
  'forum-get-topics',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await http.get(
        generatePath(ApiEndpoints.Forum.getTopics, { id }),
        { baseURL: BACKEND_URL }
      )
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при получении тем форума')
    }
  }
)

export const forumGetPosts = createAsyncThunk(
  'forum-get-posts',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await http.get(
        generatePath(ApiEndpoints.Forum.getPosts, { id }),
        { baseURL: BACKEND_URL }
      )
      return response.data[0]
    } catch (error) {
      return rejectWithValue('Ошибка при получении постов форума')
    }
  }
)

interface IAddTopic {
  id: string
  title: string
  parent_id: number
  user_id: number
  updatedAt: number
  createdAt: number
  postCount: number
  user: Partial<User> | null
}

export const forumAddTopic = createAsyncThunk(
  'forum-add-topic',
  async (data: IAddTopic, { rejectWithValue }) => {
    try {
      const response = await http.post(ApiEndpoints.Forum.addTopic, data, {
        baseURL: BACKEND_URL,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при добавлении темы форума')
    }
  }
)

interface IAddPost {
  message: string
  id: string
  user: Partial<User> | null
}

export const forumAddPost = createAsyncThunk(
  'forum-add-post',
  async (data: IAddPost, { rejectWithValue }) => {
    try {
      const response = await http.post(ApiEndpoints.Forum.addPost, data, {
        baseURL: BACKEND_URL,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при добавлении поста форума')
    }
  }
)

interface IAddEmoji {
  postId?: string
  emojiId?: string
  user: Partial<User> | null
}

export const addEmoji = createAsyncThunk(
  'forum-add-emoji',
  async (data: IAddEmoji, { rejectWithValue }) => {
    try {
      const response = await http.post(ApiEndpoints.Forum.addEmoji, data, {
        baseURL: BACKEND_URL,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при добавлении реакции')
    }
  }
)

interface IDeleteEmoji {
  emojiId: string
}

export const deleteEmoji = createAsyncThunk(
  'forum-delete-emoji',
  async (data: IDeleteEmoji, { rejectWithValue }) => {
    try {
      const response = await http.delete(ApiEndpoints.Forum.deleteEmoji, {
        data,
        baseURL: BACKEND_URL,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при добавлении реакции')
    }
  }
)

export const getEmoji = createAsyncThunk(
  'forum-get-emoji',
  async (emojiName: string, { rejectWithValue }) => {
    try {
      const response = await http.get(generatePath(ApiEndpoints.Forum.getEmoji, { emojiName }),
        { baseURL: BACKEND_URL }
      )
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при получении реакций')
    }
  }
)
