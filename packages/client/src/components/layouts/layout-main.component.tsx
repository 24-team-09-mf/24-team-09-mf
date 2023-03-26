// react
import { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'

// types
import { LayoutMainProps } from './layout-main.types'

// images
import imageLeft from '@/assets/images/bg-left.png'
import imageRight from '@/assets/images/bg-right.png'

// styles
import { Wrapper, Content, ImgLeft, ImgRight } from './layout-main.styles'

export const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <ImgLeft alt="фон" src={imageLeft} />
        <ImgRight alt="фон" src={imageRight} />
        {children}
      </Content>
      <Footer />
    </Wrapper>
  )
}
