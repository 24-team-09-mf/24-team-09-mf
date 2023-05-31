// react
import { useCallback } from 'react'

import { addEmoji, deleteEmoji } from '@/store/forum/actions'
import { useAppDispatch } from '@/store'

import { ForumEmoji } from './forum-types'
import { UserState } from '@/store/user/types'

const useEmoji = (user: UserState, emojiId: string | undefined, postId: string | undefined) => {
  const dispatch = useAppDispatch()

  const addEmojiHandler = useCallback(
    async (data: ForumEmoji) => {
      try {
        await dispatch(
          addEmoji({ ...data }))
      } catch (e) {
        console.log(e)
      }
    },
    [dispatch, postId, emojiId, user]
  )

  const deleteEmojiHandler = useCallback(
    async () => {
      try {
        if (emojiId) {
          await dispatch(
            deleteEmoji({ emojiId }))
        }
      } catch (error) {
        console.log(error)
      }
    },
    [dispatch, emojiId]
  )

  return {
    addEmojiHandler,
    deleteEmojiHandler,
  }
}

export default useEmoji

