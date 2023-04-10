// lib
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// redux
import { useAppDispatch } from '@/store'
import { signIn } from '@/store/user/auth/actions'

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
      reset()
      navigate('/profile')
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
