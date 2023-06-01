import { createAsyncThunk } from '@reduxjs/toolkit'
import { generatePath } from 'react-router-dom'

import http, { ApiEndpoints } from '@/api/base'
import { User } from '../user/types'
import axios from 'axios'

export const forumGetCategories = createAsyncThunk(
  'forum-get-categories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(ApiEndpoints.Forum.getCategories)
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
        generatePath(ApiEndpoints.Forum.getTopics, { id })
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
        generatePath(ApiEndpoints.Forum.getPosts, { id })
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
      const response = await http.post(ApiEndpoints.Forum.addTopic, data)
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
      const response = await http.post(ApiEndpoints.Forum.addPost, data)
      return response.data
    } catch (error) {
      return rejectWithValue('Ошибка при добавлении поста форума')
    }
  }
)
