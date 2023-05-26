import { createSlice } from '@reduxjs/toolkit'
import {
  forumGetCategories,
  forumGetTopics,
  forumGetPosts,
  forumAddPost,
  forumAddTopic,
} from './actions'
import { ForumStore } from './types'

const initialState: ForumStore = {
  categories: {
    isLoading: true,
    items: [],
    error: '',
  },
  topics: {
    isLoading: true,
    items: [],
    error: '',
  },
  posts: {
    isLoading: true,
    title: '',
    items: [],
    error: '',
  },
}

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Categories
      .addCase(forumGetCategories.fulfilled, (state, action) => {
        state.categories.isLoading = false
        state.categories.error = ''
        state.categories.items = action.payload
      })
      .addCase(forumGetCategories.pending, state => {
        state.categories.isLoading = true
      })
      .addCase(forumGetCategories.rejected, (state, action) => {
        state.categories.isLoading = false
        state.categories.error = action.payload as string
      })
      // Topics
      .addCase(forumGetTopics.fulfilled, (state, action) => {
        state.topics.isLoading = false
        state.topics.error = ''
        state.topics.items = action.payload
      })
      .addCase(forumGetTopics.pending, state => {
        state.topics.isLoading = true
      })
      .addCase(forumGetTopics.rejected, (state, action) => {
        state.topics.isLoading = false
        state.topics.error = action.payload as string
      })
      // Posts
      .addCase(forumGetPosts.fulfilled, (state, action) => {
        state.posts.isLoading = false
        state.posts.error = ''
        state.posts.title = action.payload.title
        state.posts.items = action.payload.posts
      })
      .addCase(forumGetPosts.pending, state => {
        state.posts.isLoading = true
      })
      .addCase(forumGetPosts.rejected, (state, action) => {
        state.posts.isLoading = false
        state.posts.error = action.payload as string
      })
      // Add Topic
      .addCase(forumAddTopic.fulfilled, (state, action) => {
        state.topics.isLoading = false
        state.topics.error = ''
        state.topics.items = [...state.topics.items, action.payload]
      })
      .addCase(forumAddTopic.pending, state => {
        state.topics.isLoading = true
      })
      .addCase(forumAddTopic.rejected, (state, action) => {
        state.topics.isLoading = false
        state.topics.error = action.payload as string
      })
      // Add Post
      .addCase(forumAddPost.fulfilled, (state, action) => {
        console.log([...state.posts.items, action.payload])
        state.posts.isLoading = false
        state.posts.error = ''
        state.posts.items = [...state.posts.items, action.payload]
      })
      .addCase(forumAddPost.pending, state => {
        state.posts.isLoading = true
      })
      .addCase(forumAddPost.rejected, (state, action) => {
        state.posts.isLoading = false
        state.posts.error = action.payload as string
      })
  },
})

export default forumSlice.reducer
