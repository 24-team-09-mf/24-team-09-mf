// react
import { forwardRef, useState } from 'react'

// redux
import { useAppDispatch } from '@/store'
import { updateAvatar } from '@/store/user/profile/actions'

// types
import { AvatarProps } from './avatar.types'

// styles
import { Wrapper, AvatarInput, AvatarImage } from './avatar.styles'

// images
import avatarDefault from '@/assets/images/avatarDefault.png'

export const Avatar = forwardRef<HTMLInputElement, AvatarProps>(
  ({ src, ...props }, ref) => {
    const dispatch = useAppDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement
      const formData = new FormData()
      if (target.files) formData.append('avatar', target.files[0])
      dispatch(updateAvatar(formData))
    }

    return (
      <Wrapper>
        <AvatarImage src={src || avatarDefault} alt="Аватар" />
        <AvatarInput
          type="file"
          accept=".png, .jpg"
          ref={ref}
          {...props}
          onChange={onChange}
        />
      </Wrapper>
    )
  }
)

Avatar.displayName = 'Avatar'
