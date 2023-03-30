import {
  CatalogRow3,
  CatalogRow2,
  CatalogTop,
  H1,
  Section,
  SectionRow2,
  SectionRow3,
} from '@/components/templates/forum/forum.styles'
import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  ForumSectionForm,
  ForumSectionTitle,
  ForumSectionTopics,
} from '@/components/organisms/forum'

export const ForumSection = () => {
  const { id } = useParams()

  // TODO: Поменять, демо
  if (id !== '1' && id !== '2') {
    return <Navigate to="/404" replace />
  }

  const demoData = {
    title: 'Сообщество',
    topics: [
      {
        id: '55',
        parentId: '1',
        title: 'Предложения по улучшению игры',
        postCount: 33,
        userId: 99,
        lastTopic: {
          id: '101',
          date: 34343434,
          title: 'Предложения по улучшению игры',
          userId: 99,
          userName: 'useruser',
        },
      },
      {
        id: '56',
        parentId: '1',
        title: 'Предложения по улучшению игры 22222',
        postCount: 44,
        userId: 99,
        lastTopic: {
          id: '101',
          date: 34343434,
          title: 'Предложения по улучшению игры',
          userId: 99,
          userName: 'useruser',
        },
      },
    ],
  }

  return (
    <Section>
      <H1>ФОРУМ</H1>
      <ForumSectionTitle title={demoData.title} />
      <CatalogTop>
        <SectionRow2>Сообщений</SectionRow2>
        <SectionRow2>Автор</SectionRow2>
        <SectionRow3>Последнее сообщение</SectionRow3>
      </CatalogTop>
      <ForumSectionTopics data={demoData.topics} />
      <ForumSectionForm id={id} />
    </Section>
  )
}
