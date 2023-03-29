// lib
import { useForm } from 'react-hook-form'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-change-password.validate'

// types
import { FormPasswordValues } from './form-change-password.types'

const useChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormPasswordValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  })

  const onSubmitHandler = async (data: FormPasswordValues) => {
    try {
      console.log(data)
      reset()
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

export default useChangePassword
