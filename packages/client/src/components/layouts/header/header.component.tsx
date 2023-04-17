// react
import { useEffect } from 'react'

// images
import image from '@/assets/images/header.png'

// lib
import { Link } from 'react-router-dom'

// redux
import { userStore, useAppDispatch } from '@/store'

import { getUser } from '@/store/user/auth/actions'

// svg
import userImg from '@/assets/icons/user.svg'

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
} from './header.styles'

export const Header = () => {
  const { user } = userStore()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user?.login === '') {
      dispatch(getUser())
    }
  }, [user])

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
        <Profile to="/profile">
          <img src={userImg} alt="профиль" />
          <User>{user?.login}</User>
        </Profile>
      </Container>
    </Wrapper>
  )
}
