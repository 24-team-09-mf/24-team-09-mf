import { useAppSelector } from './hooks'

export const forumStore = () => {
  const categories = useAppSelector(state => state.forum.categories)
  const topics = useAppSelector(state => state.forum.topics)
  const posts = useAppSelector(state => state.forum.posts)
  return { categories, topics, posts }
}
