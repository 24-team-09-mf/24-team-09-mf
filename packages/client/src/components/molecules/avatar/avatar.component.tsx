// react
import { forwardRef, useState } from 'react'

// types
import { AvatarProps } from './avatar.types'

// styles
import { Wrapper, AvatarInput, AvatarImage } from './avatar.styles'

// images
import avatarDefault from '@/assets/images/avatarDefault.png'

export const Avatar = forwardRef<HTMLInputElement, AvatarProps>(
  ({ src, ...props }, ref) => {
    const [avatarSrc, setAvatarSrc] = useState(src || avatarDefault)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          setAvatarSrc(reader.result as string)
        }
      }
    }

    return (
      <Wrapper>
        <AvatarImage
          src={avatarSrc}
          alt="Аватар"
        />
        <AvatarInput
          type="file"
          ref={ref}
          {...props}
          onChange={onChange}
        />
      </Wrapper>
    )
  }
)

Avatar.displayName = 'Avatar'
