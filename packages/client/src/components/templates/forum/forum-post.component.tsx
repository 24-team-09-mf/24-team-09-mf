import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import {
  ForumEditor,
  ForumPosts,
  ForumSectionTitle,
} from '@/components/organisms/forum'

import { forumStore } from '@/store/forumStore'
import { forumGetPosts } from '@/store/forum/actions'
import { useAppDispatch } from '@/store'

import Container from '@/components/layouts/container/container.component'
import { BaseLoader } from '@/components/molecules/loader'

import { H1 } from '@/global-styles'
import { Wrapper } from './forum.styles'

export const ForumPost = () => {
  const { postPageId } = useParams()
  const dispatch = useAppDispatch()
  const { posts } = forumStore()

  useEffect(() => {
    if (postPageId) {
      dispatch(forumGetPosts(postPageId))
    }
  }, [])

  if (posts.error === 'Ошибка при получении постов форума') {
    return <Navigate to="/404" replace />
  }

  return (
    <Container>
      <Wrapper>
        <H1>ФОРУМ</H1>
        <ForumSectionTitle title={posts.title} />
        {posts.isLoading ? <BaseLoader /> : <ForumPosts data={posts.items} />}
        <ForumEditor title="Написать сообщение" />
      </Wrapper>
    </Container>
  )
}
