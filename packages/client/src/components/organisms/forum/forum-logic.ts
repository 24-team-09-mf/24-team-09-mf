// react
import { useCallback } from 'react'

import { forumAddTopic, forumAddPost } from '@/store/forum/actions'
import { useAppDispatch } from '@/store'

import { useForm } from 'react-hook-form'
import { ForumFormsProps } from './forum-types'
import { UserState } from '@/store/user/types'

const useSectionForm = (user: UserState, id: string, postPageId?: string) => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
  } = useForm<any>({
    mode: 'onBlur',
  })

  const onSubmitHandler = useCallback(
    async (data: ForumFormsProps) => {
      try {
        if (postPageId) {
          await dispatch(
            forumAddPost({ ...data, user: user.user, id: postPageId })
          )
        } else {
          await dispatch(forumAddTopic({ ...data, user: user.user, id: id }))
        }
        reset()
        setValue('message', '')
      } catch (error) {
        console.log(error)
      }
    },
    [reset, id, postPageId, setValue]
  )

  return {
    register,
    onSubmitHandler,
    handleSubmit,
    errors,
    isValid,
    setValue,
  }
}

export default useSectionForm
