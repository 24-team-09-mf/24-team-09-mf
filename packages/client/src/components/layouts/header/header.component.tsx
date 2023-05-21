// react
import { FC, memo } from 'react'

// images
import image from '@/assets/images/header.png'

// lib
import { Link } from 'react-router-dom'

import { Switch } from '../../atoms'

// redux
import { userStore } from '@/store'

// styles
import {
  Wrapper,
  Container,
  Navigation,
  Img,
  Text,
  Btn,
  Profile,
  User,
  StyledIconWrapper,
} from './header.styles'

export const Header = () => {
  const { user } = userStore()

  return (
    <Wrapper>
      <Container>
        <Navigation>
          <Link to="/">
            <Img src={image} alt="Джунглевая опасность" />
          </Link>
          <Text to="/statistics">Статистика</Text>
          <Text to="/forum">Форум</Text>
          <Link to="/game">
            <Btn variant="contained" color="#579945">
              играть
            </Btn>
          </Link>
        </Navigation>
        <Switch />
        <Profile to="/profile">
          <StyledIconWrapper />
          <User>{user?.login}</User>
        </Profile>
      </Container>
    </Wrapper>
  )
}
