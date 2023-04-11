import { useMemo } from 'react'
import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { parsedCollisions } from '@/components/organisms/game/game-view/data/collisions'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import {
  BLOCK_SIZE,
  SYMBOL_COLLISION_BLOCK,
} from '@/components/organisms/game/game.constants'

type Props = {
  gameModel: GameModel
}
export const useCollisionsBlock = ({ gameModel }: Props) => {
  const collisions = useMemo(() => {
    const result: CollisionBlock[] = []
    if (gameModel) {
      parsedCollisions.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === SYMBOL_COLLISION_BLOCK) {
            result.push(
              new CollisionBlock({
                model: gameModel,
                dimensions: { width: BLOCK_SIZE, height: BLOCK_SIZE },
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE },
                color: 'blue',
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel])

  return collisions
}
