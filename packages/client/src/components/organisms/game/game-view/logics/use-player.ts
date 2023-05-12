import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useCallback, useMemo, useState } from 'react'
import { Player } from '@/components/organisms/game/game-view/models/Player'
import { useKeysHandlers } from '@/components/organisms/game/game-view/logics/use-keys-handlers'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import { Coin } from '@/components/organisms/game/game-view/models/Coin'
import { Enemy } from '@/components/organisms/game/game-view/models/Enemy'
import { BackgroundGame } from '@/components/organisms/game/game-view/models/BackgroundGame'
import {
  BLOCK_SIZE,
  BORDER_LEFT,
  BORDER_RIGHT,
  JUMP,
  LEFT_VIEW_BOX_BORDER,
  RIGHT_VIEW_BOX_BORDER,
  SPEED,
} from '@/components/organisms/game/game.constants'

type Props = {
  gameModel: GameModel
  keys: ReturnType<typeof useKeysHandlers>
  collisionBlocks: CollisionBlock[]
  startFinishCollisionBlocks: CollisionBlock[]
  startBlock: CollisionBlock[]
  finishBlock: CollisionBlock[]
  enemies: Enemy[]
  enemiesCollisionBlocks: CollisionBlock[]
  coins: Coin[]
  gameBackground: BackgroundGame
  changeLivesCount(value: number): void
  changeScore(value: number): void
  isEndedGame: boolean
}

function checkNextPosition(
  player: Player,
  collisionBlocks: CollisionBlock[],
  step: number
) {
  return collisionBlocks.some(collisionBlock => {
    const nextPosition = collisionBlock.position.x + step
    return (
      player.position.x <= nextPosition + collisionBlock.dimensions.width &&
      player.position.x + player.dimensions.width >= nextPosition &&
      player.position.y + player.dimensions.height >=
      collisionBlock.position.y &&
      player.position.y <=
      collisionBlock.position.y + collisionBlock.dimensions.height
    )
  })
}

export const usePlayer = ({
  gameModel,
  keys,
  collisionBlocks,
  changeLivesCount,
  startFinishCollisionBlocks,
  startBlock,
  finishBlock,
  coins,
  enemies,
  enemiesCollisionBlocks,
  isEndedGame,
  gameBackground,
  changeScore,
}: Props) => {
  const [jumpTime, setJumpTime] = useState(0)

  const player = useMemo(() => {
    if (gameModel) {
      return new Player({
        position: { x: 0, y: BLOCK_SIZE * 12 },
        frameRate: 12,
        model: gameModel,
        collisionBlocks,
        enemies,
        coins,
        decrementLives: () => changeLivesCount(-1),
        incrementScore: value => changeScore(value),
        imageSrc: '/assets/sprites/hero/idle.png',
        animations: {
          idleRight: {
            frameRate: 12,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/idle.png',
          },
          idleLeft: {
            frameRate: 12,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/idleLeft.png',
          },
          runRight: {
            frameRate: 8,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/run.png',
          },
          runLeft: {
            frameRate: 8,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/runLeft.png',
          },
          jumpRight: {
            frameRate: 4,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/jump.png',
          },
          jumpLeft: {
            frameRate: 4,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/jumpLeft.png',
          },
        },
      })
    }
  }, [gameModel, isEndedGame])

  return useCallback(() => {
    if (player) {
      // прыжок
      if (player.velocity.y === 0 && keys.pressedW && !jumpTime) {
        player.velocity.y = -JUMP
        setJumpTime(performance.now())
      }
      if (jumpTime) {
        if (performance.now() - jumpTime > 300) setJumpTime(0)
      }
      // движение по горизонтали
      player.velocity.x = 0

      if (
        keys.pressedA &&
        (player.position.x > LEFT_VIEW_BOX_BORDER ||
          startFinishCollisionBlocks
            .some(block => block.position.x === BORDER_LEFT)
        )
      ) {
        player.velocity.x = -SPEED
      } else if (
        keys.pressedD &&
        (player.position.x < RIGHT_VIEW_BOX_BORDER ||
          startFinishCollisionBlocks
            .some(block => block.dimensions.width + block.position.x === BORDER_RIGHT)
        )
      ) {
        player.velocity.x = SPEED
      } else {
        /** Тут нужно дописать кастомную логику для передвижения cropbox-а у картинка бэкграунда */
        // движение платформ
        if (keys.pressedD) {
          if (!checkNextPosition(player, collisionBlocks, -SPEED)) {
            collisionBlocks.forEach(block => (block.position.x -= SPEED))
            startBlock.forEach(block => (block.position.x -= SPEED))
            finishBlock.forEach(block => (block.position.x -= SPEED))
            startFinishCollisionBlocks.forEach(block => (block.position.x -= SPEED))
            coins.forEach(block => (block.position.x -= SPEED))
            enemies.forEach(enemy => (enemy.position.x -= SPEED))
            enemiesCollisionBlocks.forEach(block => (block.position.x -= SPEED))
            gameBackground.position.x -= SPEED
          }
        } else if (keys.pressedA) {
          if (!checkNextPosition(player, collisionBlocks, SPEED)) {
            collisionBlocks.forEach(block => (block.position.x += SPEED))
            startBlock.forEach(block => (block.position.x += SPEED))
            finishBlock.forEach(block => (block.position.x += SPEED))
            startFinishCollisionBlocks.forEach(block => (block.position.x += SPEED))
            coins.forEach(block => (block.position.x += SPEED))
            enemies.forEach(enemy => (enemy.position.x += SPEED))
            enemiesCollisionBlocks.forEach(block => (block.position.x += SPEED))
            gameBackground.position.x += SPEED
          }
        }
      }
      player.update()
    }

    if (player) {
      if (keys.pressedA) {
        player.switchSprite('runLeft')
        player.lastDirection = 'left'
      } else if (keys.pressedD) {
        player.switchSprite('runRight')
        player.lastDirection = 'right'
      } else if (keys.pressedW) {
        if (player.lastDirection === 'right') {
          player.switchSprite('jumpRight')
        } else {
          player.switchSprite('jumpLeft')
        }
      } else {
        if (player.lastDirection === 'left') {
          player.switchSprite('idleLeft')
        } else {
          player.lastDirection = 'right'
          player.switchSprite('idleRight')
        }
      }
    }
  }, [keys, jumpTime])
}
