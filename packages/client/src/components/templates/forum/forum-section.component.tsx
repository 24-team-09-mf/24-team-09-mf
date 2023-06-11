import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { forumStore } from '@/store/forumStore'
import { forumGetTopics } from '@/store/forum/actions'
import { useAppDispatch } from '@/store'

import {
  ForumEditor,
  ForumSectionTitle,
  ForumSectionTopics,
} from '@/components/organisms/forum'
import Container from '@/components/layouts/container/container.component'
import { BaseLoader } from '@/components/molecules/loader'

import { H1 } from '@/global-styles'

import {
  CatalogTop,
  SectionRowMessagesCount,
  SectionRowLastMessage,
  Wrapper,
} from './forum.styles'

export const ForumSection = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { topics } = forumStore()

  useEffect(() => {
    if (id) {
      dispatch(forumGetTopics(id))
    }
  }, [])

  if (topics.error === 'Ошибка при получении тем форума') {
    return <Navigate to="/404" replace />
  }

  return (
    <Container>
      <Wrapper>
        <H1>ФОРУМ</H1>
        <ForumSectionTitle title="Сообщество" />
        <CatalogTop>
          <SectionRowMessagesCount>Сообщений</SectionRowMessagesCount>
          <SectionRowMessagesCount>Автор</SectionRowMessagesCount>
          <SectionRowLastMessage>Последнее сообщение</SectionRowLastMessage>
        </CatalogTop>
        {topics.isLoading ? (
          <BaseLoader />
        ) : (
          <ForumSectionTopics data={topics.items} />
        )}
        <ForumEditor title="Добавить тему" titleInput="Заголовок темы" />
      </Wrapper>
    </Container>
  )
}
