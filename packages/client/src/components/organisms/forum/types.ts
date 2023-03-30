export type forumLastTopicProps = {
  id: string
  date: number
  title: string
  userId: number
  userName: string
}

export type forumStartProps = {
  id: string
  title: string
  text: string
  topicsCount: number
  lastTopic: forumLastTopicProps
}

export type forumSectionProps = {
  id: string
  parentId: string
  title: string
  postCount: number
  lastTopic: forumLastTopicProps
}

export type forumSectionsProps = {
  title: string
  topics: forumSectionProps[]
}

export type forumFormsProps = {
  id: string
  title: string
  message: string
}

export type forumPostProps = {
  id: string
  text: string
  date: number
  rate: number
  userId: number
  userName: string
  userAvatar: null | string
}

export type forumPostsProps = {
  title: string
  topics: forumPostProps[]
}
