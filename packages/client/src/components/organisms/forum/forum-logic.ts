// react
import { useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { ForumFormsProps } from './forum-types'
import http from '@/api/base'
import { UserState } from '@/store/user/types'

const useSectionForm = (user: UserState, id: string, postPageId?: string) => {
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
        // TODO изменить в следующей задаче
        data = { ...data, user: user.user, id: id }
        let url = 'http://localhost:3001/api/forum/topic/'
        if (postPageId) {
          data = { ...data, user: user.user, id: postPageId }
          url = 'http://localhost:3001/api/forum/post/'
        }
        await http.post(url, data).then(res => {
          console.log(res)
        })
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
