import {
  CatalogRowLastMessage,
  CatalogRowThreadsCount,
  CatalogTop,
  Wrapper,
} from './forum.styles'
import { ForumStartTopics } from '@/components/organisms/forum'

import Container from '@/components/layouts/container/container.component'
import { H1 } from '@/global-styles'
import { forumStartDemo } from '@/mocks'

export const Forum = () => {
  // TODO: Поменять, демо
  const data = forumStartDemo

  return (
    <Container>
      <Wrapper>
        <H1>ФОРУМ</H1>
        <CatalogTop>
          <CatalogRowThreadsCount>Тем</CatalogRowThreadsCount>
          <CatalogRowLastMessage>Последнее сообщение</CatalogRowLastMessage>
        </CatalogTop>
        <ForumStartTopics data={data} />
      </Wrapper>
    </Container>
  )
}
