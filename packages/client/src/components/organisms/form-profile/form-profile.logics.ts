// lib
import { useForm } from 'react-hook-form'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-profile.validate'

// redux
import { useAppDispatch, userState } from '@/store'
import { updateProfile } from '@/store/user/profile/actions'

// types
import { FormProfileValues } from './form-profile.types'

const useProfile = () => {
  const { user } = userState()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormProfileValues>({
    mode: 'all',
    defaultValues: {
      first_name: user?.first_name || '',
      second_name: user?.second_name || '',
      display_name: user?.display_name || '',
      login: user?.login || '',
      email: user?.email || '',
      phone: user?.phone || '',
    },

    resolver: yupResolver(validationSchema),
  })
  const dispatch = useAppDispatch()

  const onSubmitHandler = async (data: FormProfileValues) => {
    await dispatch(updateProfile(data))
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
