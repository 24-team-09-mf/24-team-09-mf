// lib
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-change-password.validate'

// redux
import { useAppDispatch } from '@/store'
import { updatePassword } from '@/store/user/profile/actions'

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
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmitHandler = async (data: FormPasswordValues) => {
    const result = await dispatch(updatePassword(data))
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

export default useChangePassword
