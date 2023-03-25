// lib
import { useForm } from 'react-hook-form'

// validation
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from './sign-in-form.validate'

// types
import { FormSignInValues } from './form-signin.types'

const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormSignInValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })


  const onSubmitHandler = async (data: FormSignInValues) => {
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

export default useSignIn
