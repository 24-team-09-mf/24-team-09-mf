import {
  CatalogRowLastMessage,
  CatalogRowThreadsCount,
  CatalogTop,
  H1,
} from '@/components/templates/forum/forum.styles'
import { ForumStartTopics } from '@/components/organisms/forum'

import Container from '@/components/layouts/container/container.component'

export const Forum = () => {
  // TODO: Поменять, демо
  const demoData = [
    {
      id: '1',
      title: 'Сообщество',
      text: 'Обсуждение игры',
      topicsCount: 12,
      lastTopic: {
        id: '55',
        date: 34343434,
        title: 'Предложения по улучшению игры',
        userId: 99,
        userName: 'useruser',
      },
    },
    {
      id: '2',
      title: 'Поддержка',
      text: 'Возникли затруднения с установкой игры, игровым процессом или учетной записью? Приглашаем на форум службы поддержки.',
      topicsCount: 12,
      lastTopic: {
        id: '55',
        date: 34343434,
        title: 'Предложения по улучшению игры',
        userId: 99,
        userName: 'useruser',
      },
    },
  ]

  return (
    <Container>
      <H1>ФОРУМ</H1>
      <CatalogTop>
        <CatalogRowThreadsCount>Тем</CatalogRowThreadsCount>
        <CatalogRowLastMessage>Последнее сообщение</CatalogRowLastMessage>
      </CatalogTop>
      <ForumStartTopics data={demoData} />
    </Container>
  )
}
