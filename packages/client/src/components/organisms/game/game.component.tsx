import { useCallback, useState } from 'react'

import { MainView, Wrapper } from './game.styles'
import { GameView } from './game-view'
import { StartView } from '@/components/organisms/game/start-view'
import { InformationView } from '@/components/organisms/game/information-view'
export const GameComponent = () => {
  const [isShowInformation, setIsShowInformation] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)

  const handlerClickStartGame = useCallback(
    () => setIsGameStarted(prev => !prev),
    []
  )

  const handlerClickShowInformation = useCallback(
    () => setIsShowInformation(prev => !prev),
    []
  )

  return (
    <Wrapper>
      <MainView>
        <GameView isStartedGame={isGameStarted} />
        {!isGameStarted && (
          <StartView
            onClickStartGame={handlerClickStartGame}
            onClickInformation={handlerClickShowInformation}
          />
        )}
        {isShowInformation && (
          <InformationView
            onCloseInformation={handlerClickShowInformation}
          />
        )}
      </MainView>
    </Wrapper>
  )
}
