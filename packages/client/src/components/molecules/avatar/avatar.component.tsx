// react
import { forwardRef, useState } from 'react'

// redux
import { useAppDispatch } from '@/store'
import { updateAvatar } from '@/store/user/profile/actions'
import { getUser } from '@/store/user/auth/actions'

// types
import { AvatarProps } from './avatar.types'

// styles
import { Wrapper, AvatarInput, AvatarImage } from './avatar.styles'

export const Avatar = forwardRef<HTMLInputElement, AvatarProps>(
  ({ src, ...props }, ref) => {
    const dispatch = useAppDispatch()

    const [avatarSrc, setAvatarSrc] = useState(src)

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          setAvatarSrc(reader.result as string)
        }
        const formData = new FormData()
        formData.append('avatar', file)
        try {
          await dispatch(updateAvatar(formData))
          await dispatch(getUser())
        } catch (error) {
          console.log(error)
        }
      }
    }

    return (
      <Wrapper>
        <AvatarImage src={avatarSrc} alt="Аватар" />
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
