// images
import image from '../../../assets/images/header.png'

// svg
import user from '../../../assets/icons/user.svg'

// styles
import * as S from './header.styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Navigation>
          <S.Img src={image} alt="меню" />
          <S.Text href="/statistics">Статистика</S.Text>
          <S.Text href="/forum">Форум</S.Text>
          <S.Btn as="a" href="/game" variant="contained" color="#579945">
            играть
          </S.Btn>
        </S.Navigation>
        <S.Profile href="/profile">
          <img src={user} alt="профиль" />
          <S.User>useruser</S.User>
        </S.Profile>
      </S.Container>
    </S.Wrapper>
  )
}
