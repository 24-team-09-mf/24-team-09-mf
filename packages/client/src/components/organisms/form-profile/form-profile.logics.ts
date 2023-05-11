// react
import { useCallback } from 'react'

// lib
import { useForm } from 'react-hook-form'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-profile.validate'

// redux
import { useAppDispatch, userStore } from '@/store'
import { updateProfile } from '@/store/user/profile/actions'
import { getUser } from '@/store/user/auth/actions'

// utils
import { generateDefaultValues } from '@/utils/generateDefaultValues'

// types
import { FormProfileValues } from './form-profile.types'

const useProfile = () => {
  const { user } = userStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormProfileValues>({
    mode: 'all',
    defaultValues: generateDefaultValues(user),

    resolver: yupResolver(validationSchema),
  })
  const dispatch = useAppDispatch()

  const onSubmitHandler = useCallback(
    async (data: FormProfileValues) => {
      try {
        await dispatch(updateProfile(data))
        await dispatch(getUser())
      } catch (error) {
        console.log(error)
      }
    },
    [dispatch]
  )

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
