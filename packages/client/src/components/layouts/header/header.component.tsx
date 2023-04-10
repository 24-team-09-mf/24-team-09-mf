// images
import image from '@/assets/images/header.png'

// lib
import { Link } from 'react-router-dom'

// svg
import user from '@/assets/icons/user.svg'

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
          <img src={user} alt="профиль" />
          <User>useruser</User>
        </Profile>
      </Container>
    </Wrapper>
  )
}
