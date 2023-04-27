import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import { BackgroundGame } from '@/components/organisms/game/game-view/models/BackgroundGame'
import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
} from '@/components/organisms/game/game.constants'

type Props = {
  gameModel: GameModel
  isEndedGame: boolean
}
export const useBackgroundGame = ({ gameModel, isEndedGame }: Props) => {
  return useMemo(() => {
    return new BackgroundGame({
      model: gameModel,
      position: {
        x: 0,
        y: 0,
      },
      dimensions: {
        width: WIDTH_VIEW * 2,
        height: HEIGHT_VIEW,
      },
      imageSrc: '/assets/lvl1.png',
    })
  }, [gameModel, isEndedGame])
}
