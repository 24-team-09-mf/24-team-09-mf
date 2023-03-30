import { FC } from 'react'
import { StartViewProps } from '@/components/organisms/game/start-view/start-view.types'
import { BtnText, Content } from '@/components/organisms/game/game.styles'
import {
  BtnStart,
  Title,
  Footer,
  Wrapper,
} from '@/components/organisms/game/start-view/start-view.styles'

export const StartView: FC<StartViewProps> = ({
  onClickStartGame,
  onClickInformation,
}) => {
  return (
    <Wrapper>
      <Content>
        <Title>
          Start the
          <br />
          Game
        </Title>
        <Footer>
          <BtnText
            as="button"
            type="button"
            color="#fff"
            variant="text"
            disabled={false}
            onClick={onClickInformation}
          >
            How to play
          </BtnText>
          <BtnStart
            as="button"
            type="button"
            color="#fff"
            variant="contained"
            disabled={false}
            onClick={onClickStartGame}
          >
            Run Game
          </BtnStart>
        </Footer>
      </Content>
    </Wrapper>
  )
}
