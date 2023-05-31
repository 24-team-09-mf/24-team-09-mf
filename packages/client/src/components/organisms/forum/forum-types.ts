import { ReactElement } from 'react'
import { User } from '@/store/user/types'

export type ForumLastTopicProps = ForumSectionProps & {
  user: Partial<User>
} & { posts: Record<number, { createdAt: string }> }

export type ForumStartProps = {
  id: number
  title: string
  description: string
  topicsCount: number
  topics: ForumLastTopicProps[]
}

export type ForumSectionProps = {
  id: string
  parent_id: string
  title: string
  postsCount: number
  user: Partial<User>
  posts: Record<number, { createdAt: string }>
}

export type ForumFormsProps = {
  user: unknown
  id: string
  postPageId?: string
  title: string
  message: string
  parent_id: number
  user_id: number
  updatedAt: number
  createdAt: number
  postCount: number
}

export type ForumPostEmoji = {
  postPageId?: string
  postId?: string
  emojiId?: string
  user: unknown
}

export type ForumEmoji = {
  id: string
  user_id: string
  file: {
    emoji_name: string
  }
}

export type ForumPostProps = {
  id: string
  message: string | ReactElement
  createdAt: string
  user: Partial<User>
  rate: number
  // userId: number
  // userName: string
  // userAvatar: null | string
  emojis: ForumEmoji[]
}

export type ForumEditorProps = {
  title: string
  titleInput?: string | null
  replyMessage?: ReactElement
}
