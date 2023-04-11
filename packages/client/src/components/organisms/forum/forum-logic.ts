import { useForm } from 'react-hook-form'
import { ForumFormsProps } from './forum-types'

const useSectionForm = (id: string, postPageId?: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
    getValues,
  } = useForm<any>({
    mode: 'onBlur',
  })

  const onSubmitHandler = async (data: ForumFormsProps) => {
    try {
      data = { ...data, id: id }
      if (postPageId) data = { ...data, postPageId: postPageId }
      console.log(data)
      reset()
      setValue('message', '')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    register,
    onSubmitHandler,
    handleSubmit,
    errors,
    isValid,
    setValue,
    getValues,
  }
}

export default useSectionForm
