import { Wrapper, Image, Title } from './jungleHeader.styles'

import jungleTileset from '@/assets/images/landing/jungle_tileset.png'

const VARIANTS = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

const VARIANT_FONT_SIZES = {
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '42px',
  xl: '48px',
}

const ALIGN_VARIANTS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

interface IJungleHeaderProps {
  title: string
  variant?: keyof typeof VARIANTS
  align?: 'left' | 'center' | 'right'
}

const JungleHeader: React.FC<IJungleHeaderProps> = ({
  title,
  variant = 'xl',
  align = 'center',
}) => {
  const fontSize = VARIANT_FONT_SIZES[variant]
    ? VARIANT_FONT_SIZES[variant]
    : VARIANT_FONT_SIZES['xl']

  return (
    <Wrapper align={ALIGN_VARIANTS[align]}>
      <Image src={jungleTileset} size={fontSize} />
      <Title fontSize={fontSize}>{title}</Title>
    </Wrapper>
  )
}

export default JungleHeader
