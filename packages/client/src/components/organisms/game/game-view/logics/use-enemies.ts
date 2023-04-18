import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import {
  ENEMY_COLLISION_SYMBOL,
  parsedEnemiesCollisionsLvl1,
} from '@/components/organisms/game/game-view/data/enemiesCollisionsLvl1'
import { BLOCK_SIZE } from '@/components/organisms/game/game.constants'
import {
  ENEMY_SYMBOL,
  parseEnemiesLvl1,
} from '@/components/organisms/game/game-view/data/enemiesLvl1'
import { Enemy } from '@/components/organisms/game/game-view/models/Enemy'

type Props = {
  gameModel: GameModel
  isEndedGame: boolean
}
export const useEnemies = ({
  gameModel,
  isEndedGame,
}: Props): [Enemy[], CollisionBlock[]] => {
  const collisions = useMemo(() => {
    const result: CollisionBlock[] = []
    if (gameModel) {
      parsedEnemiesCollisionsLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === ENEMY_COLLISION_SYMBOL) {
            result.push(
              new CollisionBlock({
                model: gameModel,
                dimensions: { width: BLOCK_SIZE, height: BLOCK_SIZE },
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE - 8 },
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel, isEndedGame])

  const enemies = useMemo(() => {
    const result: Enemy[] = []
    if (gameModel && collisions.length) {
      parseEnemiesLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === ENEMY_SYMBOL) {
            result.push(
              new Enemy({
                model: gameModel,
                frameRate: 8,
                imageSrc: '/assets/sprites/cat/runLeft.png',
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE - 8 },
                collisionBlocks: collisions,
                startVelocity: x % 2 === 0 ? -2 : 2,
                animations: {
                  runRight: {
                    frameRate: 8,
                    frameBuffer: 13,
                    imageSrc: '/assets/sprites/cat/run.png',
                  },
                  runLeft: {
                    frameRate: 8,
                    frameBuffer: 13,
                    imageSrc: '/assets/sprites/cat/runLeft.png',
                  },
                },
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel, collisions])

  return [enemies, collisions]
}
