import { H1, Section } from '@/components/templates/forum/forum.styles'
import React from 'react'
import {
  ForumPosts,
  ForumPostsForm,
  ForumSectionTitle,
} from '@/components/organisms/forum'
import { Navigate, useParams } from 'react-router-dom'

export const ForumPost = () => {
  const { id, postPageId } = useParams()

  // TODO: Поменять, демо
  if (id !== '1' && id !== '2') {
    return <Navigate to="/404" replace />
  }
  if (postPageId !== '55' && postPageId !== '56') {
    return <Navigate to="/404" replace />
  }
  const demoData = {
    title: 'Слетает настройка “Ограничение активного быстродействия”',
    posts: [
      {
        id: '99',
        text: 'Всем привет!Недавно заметил, что после каждого перезахода в игру, отключается нативный фпс-лок. Эта фигня как-то лечится или проще залочить фпс в настройках драйвера и забить? Началось очевидно после прилета патча 10.0.7 на лайв.',
        date: 34343434,
        rate: 7,
        userId: 99,
        userName: 'useruser',
        userAvatar: null,
      },
      {
        id: '100',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa AAAAAAAAAAAAAAAAAAAAAAAAA',
        date: 34343434,
        rate: 1,
        userId: 99,
        userName: 'useruser',
        userAvatar: null,
      },
      {
        id: '101',
        text: 'Всем привет!Недавно заметил, что после каждого перезахода в игру, отключается нативный фпс-лок. Эта фигня как-то лечится или проще залочить фпс в настройках драйвера и забить? Началось очевидно после прилета патча 10.0.7 на лайв.',
        date: 34343434,
        rate: 0,
        userId: 99,
        userName: 'useruser',
        userAvatar: null,
      },
    ],
  }

  return (
    <Section>
      <H1>ФОРУМ</H1>
      <ForumSectionTitle title={demoData.title} />
      <div>
        <ForumPosts data={demoData.posts} />
      </div>
      <ForumPostsForm id={id} postPageId={postPageId} />
    </Section>
  )
}
