// lib
import { useForm } from 'react-hook-form'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-profile.validate'

// redux
import { useAppDispatch, userStore } from '@/store'
import { updateProfile } from '@/store/user/profile/actions'
import { getUser } from '@/store/user/auth/actions'

// types
import { FormProfileValues } from './form-profile.types'

const useProfile = () => {
  const { user } = userStore()
  const dispatch = useAppDispatch()

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
      await dispatch(updateProfile(data))
      await dispatch(getUser())
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
    user,
  }
}

export default useProfile
