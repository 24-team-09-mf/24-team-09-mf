import { useState, useEffect } from 'react'

// lib
import { useForm } from 'react-hook-form'

// validation
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from './form-profile.validate'

// redux
import { useAppDispatch, userState } from '@/store'
import { updateProfile } from '@/store/user/profile/actions'

// utils
import { generateDefaultValues } from '@/utils/generateDefaultValues'
import { AvatarUrl } from '@/api/base'

// types
import { FormProfileValues } from './form-profile.types'

const useProfile = () => {
  const { user } = userState()

  const [avatarSrc, setAvatarSrc] = useState('')

  useEffect(() => {
    if (user?.avatar) {
      setAvatarSrc(`${AvatarUrl}${user.avatar}`)
    }
  }, [user?.avatar])

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

  const onSubmitHandler = async (data: FormProfileValues) => {
    try {
      await dispatch(updateProfile(data))
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
    avatarSrc,
  }
}

export default useProfile
