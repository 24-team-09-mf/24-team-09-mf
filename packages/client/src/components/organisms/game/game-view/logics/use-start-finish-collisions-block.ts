import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import {
  parsedStartFinishCollisionsLvl1,
  START_FINISH_SYMBOL,
} from '@/components/organisms/game/game-view/data/startFinishCollisionsLvl1'
import { BLOCK_SIZE } from '@/components/organisms/game/game.constants'

type Props = {
  gameModel: GameModel
  isEndedGame: boolean
}

export const useStartFinishCollisionBlocks = ({
  gameModel,
  isEndedGame,
}: Props) => {
  const collisions = useMemo(() => {
    const result: CollisionBlock[] = []
    if (gameModel) {
      parsedStartFinishCollisionsLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === START_FINISH_SYMBOL) {
            result.push(
              new CollisionBlock({
                model: gameModel,
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE },
                frameRate: 4,
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel, isEndedGame])

  return collisions
}
