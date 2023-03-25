// lib
import { useForm } from 'react-hook-form'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-signup.validate'

// types
import { FormSignUpValues } from './form-signup.types'

const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormSignUpValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const onSubmitHandler = async (data: FormSignUpValues) => {
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

export default useSignUp
