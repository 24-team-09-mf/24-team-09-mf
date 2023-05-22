// react
import { useCallback } from 'react'

// lib
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// redux
import { useAppDispatch } from '@/store'
import { getUser, signUp } from '@/store/user/auth/actions'

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

  const onSubmitHandler = useCallback(
    async (data: FormSignUpValues) => {
      try {
        await dispatch(signUp(data))
        const result = await dispatch(getUser())
        if (result.meta.requestStatus === 'fulfilled') {
          reset()
          navigate('/profile')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [reset, navigate, dispatch]
  )

  return {
    register,
    onSubmitHandler,
    handleSubmit,
    errors,
    isValid,
  }
}

export default useSignUp
