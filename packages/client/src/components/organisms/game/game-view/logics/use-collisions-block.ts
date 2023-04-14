import { useMemo } from 'react'
import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import { BLOCK_SIZE } from '@/components/organisms/game/game.constants'
import {
  COLLISION_SYMBOL,
  parsedCollisionLvl1,
} from '@/components/organisms/game/game-view/data/collisionsLvl1'

type Props = {
  gameModel: GameModel
}
export const useCollisionsBlock = ({ gameModel }: Props) => {
  const collisions = useMemo(() => {
    const result: CollisionBlock[] = []
    if (gameModel) {
      parsedCollisionLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === COLLISION_SYMBOL) {
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
