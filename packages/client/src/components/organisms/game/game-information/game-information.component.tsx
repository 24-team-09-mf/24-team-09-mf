import { useGameStore } from '@/store/gameStore'
import {
  Wrapper,
  Content,
  Title,
} from '@/components/organisms/game/game-information/game-information.styles'

export const GameInformation = () => {
  const { score } = useGameStore()
  return (
    <Wrapper>
      <Content>
        <Title>{score}</Title>
      </Content>
    </Wrapper>
  )
}
