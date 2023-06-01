import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import {
  parsedFinishLvl1,
  FINISH_SYMBOL,
} from '@/components/organisms/game/game-view/data/finishLvl1'
import { BLOCK_SIZE } from '@/components/organisms/game/game.constants'
import { Finish } from '@/components/organisms/game/game-view/models/Finish'

type Props = {
  gameModel: GameModel
  isEndedGame: boolean
  onGameOver: (outcome: string) => void
}

export const useFinish = ({ gameModel, isEndedGame, onGameOver }: Props) => {
  return useMemo(() => {
    const result: Finish[] = []
    if (gameModel) {
      parsedFinishLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === FINISH_SYMBOL) {
            result.push(
              new Finish({
                model: gameModel,
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE + 3 },
                frameRate: 4,
                frameBuffer: 12,
                imageSrc: '/assets/sprites/cat/licks1.png',
                onGameOver,
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel, isEndedGame, onGameOver])
}
