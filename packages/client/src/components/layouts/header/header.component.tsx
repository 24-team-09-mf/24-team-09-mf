// react
import { useEffect, useState } from 'react'

// images
import image from '@/assets/images/header.png'

// lib
import { Link } from 'react-router-dom'

// components
import { Switch } from '../../atoms'

// redux
import { userStore, useAppDispatch } from '@/store'

// import { themeStore } from '@/store/themeStore'
import { themeGetUserTheme } from '@/store/siteTheme/actions'

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

  const dispatch = useAppDispatch()

  console.log(user?.id)

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
