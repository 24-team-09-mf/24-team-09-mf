import { useState } from 'react'

import { MainView } from './game.styles'
import { GameView } from './game-view'
import { StartView } from '@/components/organisms/game/start-view'
import { InformationView } from '@/components/organisms/game/information-view'
export const GameComponent = () => {
  const [isShowInformation, setIsShowInformation] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)

  return (
    <MainView>
      <GameView isStartedGame={isGameStarted} />
      { !isGameStarted &&
        <StartView
          onClickStartGame={() => setIsGameStarted(true)}
          onClickInformation={() => setIsShowInformation(true)}
        />
      }
      {
        isShowInformation && (
          <InformationView
            onCloseInformation={() => setIsShowInformation(false)}
          />
        )
      }
    </MainView>
  )
}
