import { Outlet } from 'react-router-dom'
// react
import { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'

// images
import imageLeft from '@/assets/images/bg-left.png'
import imageRight from '@/assets/images/bg-right.png'

// styles
import { Layout, Content, ImgLeft, ImgRight } from './layout-main.styles'
import { ErrorWrapper } from '@/components/layouts/error-wrapper'

export const LayoutMain: FC = () => {
  return (
    <ErrorWrapper>
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
        <ImgLeft alt="фон" src={imageLeft} />
        <ImgRight alt="фон" src={imageRight} />
      </Layout>
    </ErrorWrapper>
  )
}
