export const forumStartDemo = [
  {
    id: '1',
    title: 'Сообщество',
    text: 'Обсуждение игры',
    topicsCount: 12,
    lastTopic: {
      id: '1',
      date: 1681213333000,
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
      id: '2',
      date: 1682213533000,
      title: 'Предложения по улучшению игры',
      userId: 99,
      userName: 'useruser',
    },
  },
]

export const forumSectionDemo = {
  title: 'Сообщество',
  topics: [
    {
      id: '1',
      parentId: '1',
      title: 'Предложения по улучшению игры',
      postCount: 33,
      userId: 99,
      lastTopic: {
        id: '101',
        date: 1681213333000,
        title: 'Предложения по улучшению игры',
        userId: 99,
        userName: 'useruser',
      },
    },
    {
      id: '2',
      parentId: '1',
      title: 'Предложения по улучшению игры 22222',
      postCount: 44,
      userId: 99,
      lastTopic: {
        id: '101',
        date: 1682213533000,
        title: 'Предложения по улучшению игры',
        userId: 99,
        userName: 'useruser',
      },
    },
  ],
}

export const forumPostsDemo = {
  title: 'Слетает настройка “Ограничение активного быстродействия”',
  posts: [
    {
      id: '99',
      text: 'Всем привет!Недавно заметил, что после каждого перезахода в игру, отключается нативный фпс-лок. Эта фигня как-то лечится или проще залочить фпс в настройках драйвера и забить? Началось очевидно после прилета патча 10.0.7 на лайв.',
      date: 1681213333000,
      rate: 7,
      userId: 99,
      userName: 'useruser',
      userAvatar: null,
      emoji: null,
    },
    {
      id: '100',
      text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa AAAAAAAAAAAAAAAAAAAAAAAAA',
      date: 1681213333000,
      rate: 1,
      userId: 99,
      userName: 'useruser',
      userAvatar: null,
      emoji: [{ name: 'robot', usersId: [2, 3, 4, 5, 6, 7, 8] }],
    },
    {
      id: '101',
      text: '<blockquote><strong>useruser</strong><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAA</p></blockquote> Всем привет!Недавно заметил, что после каждого перезахода в игру, отключается нативный фпс-лок. Эта фигня как-то лечится или проще залочить фпс в настройках драйвера и забить? Началось очевидно после прилета патча 10.0.7 на лайв.',
      date: 1682213533000,
      rate: 0,
      userId: 99,
      userName: 'useruser',
      userAvatar: null,
      emoji: [
        { name: 'poop', usersId: [1, 2, 3] },
        { name: 'cat', usersId: [1] },
      ],
    },
  ],
}
