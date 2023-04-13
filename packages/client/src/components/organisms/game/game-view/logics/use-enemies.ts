import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import {
  ENEMY_COLLISION_SYMBOL,
  parsedEnemiesCollisionsLvl1
} from '@/components/organisms/game/game-view/data/enemiesCollisionsLvl1'
import { BLOCK_SIZE } from '@/components/organisms/game/game.constants'
import { ENEMY_SYMBOL, parseEnemiesLvl1 } from '@/components/organisms/game/game-view/data/enemiesLvl1'
import { Enemy } from '@/components/organisms/game/game-view/models/Enemy'

type Props = {
  gameModel: GameModel
}
export const useEnemies = ({ gameModel }: Props): [Enemy[], CollisionBlock[]] => {
  const collisions = useMemo(() => {
    const result: CollisionBlock[] = [];
    if (gameModel) {
      parsedEnemiesCollisionsLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === ENEMY_COLLISION_SYMBOL) {
            result.push(
              new CollisionBlock({
                model: gameModel,
                dimensions: { width: BLOCK_SIZE, height: BLOCK_SIZE },
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE },
                color: 'rgba(249, 210, 5, 0.5)',
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel]);

  const enemies = useMemo(() => {
    const result: Enemy[] = []
    if (gameModel && collisions.length) {
      parseEnemiesLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === ENEMY_SYMBOL) {
            result.push(
              new Enemy({
                model: gameModel,
                dimensions: { width: BLOCK_SIZE, height: BLOCK_SIZE },
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE - 0.03 },
                color: '#f105fa',
                collisionBlocks: collisions,
                startVelocity: x % 2 === 0 ? -2 : 2
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel, collisions]);

  return [ enemies, collisions ]
}
