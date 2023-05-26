import {
  ForumStartProps,
  ForumSectionProps,
  ForumPostProps,
} from '@/components/organisms/forum/forum-types'
// export interface Post {
//   message: string
//   parent_id: number
//   user_id: number
// }

export interface Posts {
  isLoading: boolean
  items: ForumPostProps[]
  title: string
  error: string
}

// export interface Topic {
//   id: number
//   title: string
//   user_id: number
// }

export interface Topics {
  isLoading: boolean
  items: ForumSectionProps[]
  error: string
}

// export interface Category {
//   id: number
//   title: string
//   topicCount: number
//   topics: Topic[]
// }

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
