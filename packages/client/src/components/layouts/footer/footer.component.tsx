// images
import image from '../../../assets/images/footer.png'

// styles
import * as S from './footer.styles'

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterText>
        Команда разработки: &nbsp;
        <S.Link href="https://github.com/oalbukova" target="_blank">
          oalbukova
        </S.Link>
        |
        <S.Link href="https://github.com/alheym" target="_blank">
          alheym
        </S.Link>
        |
        <S.Link href="https://github.com/Lobanovk" target="_blank">
          Lobanovk
        </S.Link>
        |
        <S.Link href="https://github.com/ErikKhasanov" target="_blank">
          ErikKhasanov
        </S.Link>
        |
        <S.Link href="https://github.com/leopard-work" target="_blank">
          leopard-work
        </S.Link>
      </S.FooterText>
      <S.FooterText>&#169; game name 2023</S.FooterText>
      <S.Img src={image} alt="профиль" />
    </S.Wrapper>
  )
}
