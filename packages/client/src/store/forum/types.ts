import {
  ForumStartProps,
  ForumSectionProps,
  ForumPostProps,
} from '@/components/organisms/forum/forum-types'

export interface Posts {
  isLoading: boolean
  items: ForumPostProps[]
  title: string
  error: string
}

export interface Topics {
  isLoading: boolean
  items: ForumSectionProps[]
  error: string
}

export interface Categories {
  isLoading: boolean
  items: ForumStartProps[]
  error: string
}

export interface ForumStore {
  categories: Categories
  topics: Topics
  posts: Posts
}
