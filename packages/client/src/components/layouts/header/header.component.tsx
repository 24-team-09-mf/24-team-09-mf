// images
import image from '@/assets/images/header.png'

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
  LinkComponent,
} from './header.styles'

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Navigation>
          <Img src={image} alt="меню" />
          <Text to="/statistics">Статистика</Text>
          <Text to="/forum">Форум</Text>
          <LinkComponent to="/game">
            <Btn variant="contained" color="#579945">
              играть
            </Btn>
          </LinkComponent>
        </Navigation>
        <Profile to="/profile">
          <img src={user} alt="профиль" />
          <User>useruser</User>
        </Profile>
      </Container>
    </Wrapper>
  )
}
