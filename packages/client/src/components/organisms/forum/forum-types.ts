import { ReactElement } from 'react'

export type ForumLastTopicProps = {
  id: string
  date: number
  title: string
  userId: number
  userName: string
}

export type ForumStartProps = {
  id: string
  title: string
  text: string
  topicsCount: number
  lastTopic: ForumLastTopicProps
}

export type ForumSectionProps = {
  id: string
  parentId: string
  title: string
  postCount: number
  lastTopic: ForumLastTopicProps
}

export type ForumFormsProps = {
  id: string
  postPageId?: string
  title: string
  message: string
}

export type ForumPostProps = {
  id: string
  text: string | ReactElement
  date: number
  rate: number
  userId: number
  userName: string
  userAvatar: null | string
}
