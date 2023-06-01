// react
import { useCallback } from 'react'

import { addEmoji, deleteEmoji, getEmoji } from '@/store/forum/actions'
import { useAppDispatch } from '@/store'

import { ForumPostEmoji } from './forum-types'
import { UserState } from '@/store/user/types'

const useEmoji = (user: UserState, emojiId: string | undefined, postId: string | undefined) => {
  const dispatch = useAppDispatch()

  const addEmojiHandler = useCallback(
    async (data: ForumPostEmoji) => {
      try {
        const emojiKey = data.emojiName
        const response = await dispatch(getEmoji(emojiKey))

        if (response && response.payload && response.payload.id) {
          await dispatch(
            addEmoji({
              postId: data.postId,
              emojiId: response.payload.id,
              user: user.user
            })
          )
        }
      } catch (e) {
        console.log(e)
      }
    },
    [dispatch, postId, emojiId, user]
  )

  const deleteEmojiHandler = useCallback(
    async (data: ForumPostEmoji) => {
      try {
        const emojiKey = data.emojiName
        const response = await dispatch(getEmoji(emojiKey))

        if (response && response.payload && response.payload.id) {
          await dispatch(
            deleteEmoji({
              postId: data.postId,
              emojiId: response.payload.id,
              user: user.user
            })
          )
          console.log('Emoji deleted:', emojiKey)

        }
      } catch (e) {
        console.log(e)
      }
    },
    [dispatch]
  )

  return {
    addEmojiHandler,
    deleteEmojiHandler,
  }
}

export default useEmoji

