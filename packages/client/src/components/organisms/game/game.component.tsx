import { useCallback, useState } from 'react'

import { MainView, Wrapper } from './game.styles'
import { GameView } from './game-view'
import { StartView } from '@/components/organisms/game/start-view'
import { EndView } from './end-view'
import { InformationView } from '@/components/organisms/game/information-view'


import { addLeaderboardItem } from '@/api/leaderboard'

export const GameComponent = () => {
  const [isShowInformation, setIsShowInformation] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameEnded, setIsGameEnded] = useState(false)

  const handlerClickStartGame = useCallback(
    () => setIsGameStarted(prev => !prev),
    []
  )

  const handlerClickRestartGame = useCallback(
    // () => setIsGameEnded(prev => !prev),
    // []

    () => addLeaderboardItem({
      score: 30,
      name: 'Johny',
      avatar: 'https://sun9-7.userapi.com/impf/c824601/v824601111/eb480/OLjT9b9_GKs.jpg?size=690x841&quality=96&sign=5fe7154d6d87469793a95088c215e207&type=album'
    }),
    []
  )

  const handlerClickShowInformation = useCallback(
    () => setIsShowInformation(prev => !prev),
    []
  )

  const handlerGameOver = useCallback(() => setIsGameEnded(true), [])

  return (
    <Wrapper>
      <MainView>
        <GameView
          isStartedGame={isGameStarted}
          isEndedGame={isGameEnded}
          onGameOver={() => setIsGameEnded(true)}
        />
        {!isGameStarted && !isGameEnded && (
          <StartView
            onClickStartGame={handlerClickStartGame}
            onClickInformation={handlerClickShowInformation}
          />
        )}
        {isShowInformation && (
          <InformationView onCloseInformation={handlerClickShowInformation} />
        )}
        {isGameEnded && (
          <EndView onClickStartGame={handlerClickRestartGame} score={1034} />
        )}
      </MainView>
    </Wrapper>
  )
}
