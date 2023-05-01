// lib
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// redux
import { useAppDispatch } from '@/store'
import { signIn, getUser } from '@/store/user/auth/actions'
import { oAuthGetServiseId } from '@/store/user/oauth/actions'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-signin.validate'

// types
import { FormSignInValues } from './form-signin.types'

const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormSignInValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmitHandler = async (data: FormSignInValues) => {
    try {
      await dispatch(signIn(data))
      const result = await dispatch(getUser())
      if (result.meta.requestStatus === 'fulfilled') {
        reset()
        navigate('/profile')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleOauth = (): void => {
    dispatch(oAuthGetServiseId())
  }

  return {
    register,
    onSubmitHandler,
    handleSubmit,
    errors,
    isValid,
    handleOauth
  }
}

export default useSignIn
