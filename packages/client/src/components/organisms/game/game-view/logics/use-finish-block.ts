import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import {
  parsedFinishLvl1,
  FINISH_SYMBOL,
} from '@/components/organisms/game/game-view/data/finishLvl1'
import { BLOCK_SIZE } from '@/components/organisms/game/game.constants'

type Props = {
  gameModel: GameModel
  isEndedGame: boolean
}

export const useFinishBlock = ({ gameModel, isEndedGame }: Props) => {
  const finish = useMemo(() => {
    const result: CollisionBlock[] = []
    if (gameModel) {
      parsedFinishLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === FINISH_SYMBOL) {
            result.push(
              new CollisionBlock({
                model: gameModel,
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE + 3 },
                frameRate: 4,
                frameBuffer: 12,
                imageSrc: '/assets/sprites/cat/licks1.png'
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel, isEndedGame])

  return finish
}
