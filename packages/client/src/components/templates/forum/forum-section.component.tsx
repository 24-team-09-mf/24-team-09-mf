import {
  CatalogTop,
  SectionRowMessagesCount,
  SectionRowLastMessage,
  Wrapper,
} from './forum.styles'
import { Navigate, useParams } from 'react-router-dom'
import {
  ForumEditor,
  ForumSectionTitle,
  ForumSectionTopics,
} from '@/components/organisms/forum'

import Container from '@/components/layouts/container/container.component'
import { H1 } from '@/global-styles'
import { forumSectionDemo } from '@/mocks'

export const ForumSection = () => {
  const { id } = useParams()

  // TODO: Поменять, демо
  if (id !== '1' && id !== '2') {
    return <Navigate to="/404" replace />
  }

  const data = forumSectionDemo

  return (
    <Container>
      <Wrapper>
        <H1>ФОРУМ</H1>
        <ForumSectionTitle title={data.title} />
        <CatalogTop>
          <SectionRowMessagesCount>Сообщений</SectionRowMessagesCount>
          <SectionRowMessagesCount>Автор</SectionRowMessagesCount>
          <SectionRowLastMessage>Последнее сообщение</SectionRowLastMessage>
        </CatalogTop>
        <ForumSectionTopics data={data.topics} />
        <ForumEditor title="Добавить тему" titleInput="Заголовок темы" />
      </Wrapper>
    </Container>
  )
}
