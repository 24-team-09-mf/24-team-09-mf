import { useForm } from 'react-hook-form'
import { forumFormsProps } from '@/components/organisms/forum/types'

const useSectionForm = () => {
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

  const onSubmitHandler = async (data: forumFormsProps) => {
    try {
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
