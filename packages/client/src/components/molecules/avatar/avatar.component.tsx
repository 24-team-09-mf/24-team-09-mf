// react
import { forwardRef, useState, useEffect } from 'react'

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

    const [avatarSrc, setAvatarSrc] = useState(avatarDefault)

    useEffect(() => {
      if (src) {
        setAvatarSrc(src)
      }
    }, [src])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          setAvatarSrc(reader.result as string)
        }
        const formData = new FormData()
        formData.append('avatar', file)
        dispatch(updateAvatar(formData))
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
