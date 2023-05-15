enum Path {
  DEFAULT = '/',
  ERROR_500 = '500',
  ERROR_400 = '400',
  NOT_FOUND = '*',
  SIGN_IN = 'signin',
  SIGN_UP = 'signup',
  PROFILE = 'profile',
  CHANGE_PASSWORD = 'change-password',
  FORUM = 'forum',
  FORUM_ID = 'forum/:id',
  FORUM_POST_PAGE = 'forum/:id/:postPageId',
  STATISTICS = 'statistics',
  GAME = 'GAME',
}

export default Path
