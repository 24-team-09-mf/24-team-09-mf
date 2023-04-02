import { Wrapper, Image, Title } from './jungleHeader.styles'

import { ALIGN_VARIANTS, VARIANT_FONT_SIZES } from './jungleHeader.contstants'
import { IJungleHeaderProps } from './jungleHeader.types'

import jungleTileset from '@/assets/images/landing/jungle_tileset.png'

export const JungleHeader: React.FC<IJungleHeaderProps> = ({
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
