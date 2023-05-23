import {
  ForumEditor,
  ForumPosts,
  ForumSectionTitle,
} from '@/components/organisms/forum'
import { Navigate, useParams } from 'react-router-dom'

import Container from '@/components/layouts/container/container.component'
import { H1 } from '@/global-styles'
import { Wrapper } from './forum.styles'
import { forumPostsDemo } from '@/mocks'

export const ForumPost = () => {
  const { id, postPageId } = useParams()

  // TODO: Поменять, демо
  // if (id !== '1' && id !== '2') {
  //   return <Navigate to="/404" replace />
  // }
  // if (postPageId !== '55' && postPageId !== '56') {
  //   return <Navigate to="/404" replace />
  // }
  const data = forumPostsDemo

  return (
    <Container>
      <Wrapper>
        <H1>ФОРУМ</H1>
        <ForumSectionTitle title={data.title} />
        <ForumPosts data={data.posts} />
        <ForumEditor title="Написать сообщение" />
      </Wrapper>
    </Container>
  )
}
