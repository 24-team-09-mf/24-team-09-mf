// lib
import { useForm } from 'react-hook-form'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-profile.validate'

// types
import { FormProfileValues } from './form-profile.types'

const useProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormProfileValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  })

  const onSubmitHandler = async (data: FormProfileValues) => {
    try {
      console.log(data)
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
  }
}

export default useProfile


