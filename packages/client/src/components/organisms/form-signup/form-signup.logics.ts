// lib
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// redux
import { useAppDispatch } from '@/store'
import { signUp } from '@/store/user/auth/actions'

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
    mode: 'all',
    resolver: yupResolver(validationSchema),
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmitHandler = async (data: FormSignUpValues) => {
    const result = await dispatch(signUp(data))
    if (result.meta.requestStatus === 'fulfilled') {
      reset()
      navigate('/profile')
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
