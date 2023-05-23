// react
import { useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { ForumFormsProps } from './forum-types'

const useSectionForm = (id: string, postPageId?: string) => {
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
        data = { ...data, id: id }
        if (postPageId) data = { ...data, postPageId: postPageId }
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
