// react
import { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'

// types
import { LayoutMainProps } from './layout-main.types'

// images
import imageLeft from '../../assets/images/bg-left.png';
import imageRight from '../../assets/images/bg-right.png';

// styles
import * as S from './layout-main.styles'

export const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.ImgLeft  alt="фон" src={imageLeft}/>
        <S.ImgRight alt="фон" src={imageRight}/>
        {children}
      </S.Content>
      <Footer />
    </S.Wrapper>
  )
}
