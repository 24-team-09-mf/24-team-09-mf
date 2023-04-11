import { Link } from 'react-router-dom'
import { FC } from 'react'
import { EndViewProps } from './end-view.types'
import { BtnText, Content } from '../game.styles'
import { BtnStart, Title, Score, Footer, Wrapper } from './end-view.styles'

export const EndView: FC<EndViewProps> = ({ onClickStartGame, score }) => {
  return (
    <Wrapper>
      <Content>
        <Title>Game over</Title>
        <Score>SCORE: {score}</Score>
        <Footer>
          <Link to="/forum">
            <BtnText
              as="button"
              type="button"
              color="#fff"
              variant="text"
              disabled={false}>
              Forum
            </BtnText>
          </Link>
          <Link to="/statistics">
            <BtnText
              as="button"
              type="button"
              color="#fff"
              variant="text"
              disabled={false}>
              Leaderboard
            </BtnText>
          </Link>
          <BtnStart
            as="button"
            type="button"
            color="#fff"
            variant="contained"
            disabled={false}
            onClick={onClickStartGame}>
            Retry
          </BtnStart>
        </Footer>
      </Content>
    </Wrapper>
  )
}
