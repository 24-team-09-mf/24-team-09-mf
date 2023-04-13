import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useCallback, useMemo, useState } from 'react'
import { Player } from '@/components/organisms/game/game-view/models/Player'
import { useKeysHandlers } from '@/components/organisms/game/game-view/logics/use-keys-handlers'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'

type Props = {
  gameModel: GameModel
  keys: ReturnType<typeof useKeysHandlers>
  collisionBlocks: CollisionBlock[]
  startFinishCollisionBlocks: CollisionBlock[]
  onGameOver(): void
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
  onGameOver,
  startFinishCollisionBlocks,
}: Props) => {
  const [jumpTime, setJumpTime] = useState(0)

  const player = useMemo(() => {
    if (gameModel) {
      return new Player({
        position: { x: 0, y: 32 * 12 },
        dimensions: { width: 30, height: 50 },
        model: gameModel,
        collisionBlocks,
        onGameOver,
      })
    }
  }, [gameModel])

  const update = useCallback(() => {
    if (player) {
      // прыжок
      if (player.velocity.y === 0 && keys.pressedW && !jumpTime) {
        player.velocity.y = -12
        setJumpTime(performance.now())
      }
      if (jumpTime) {
        if (performance.now() - jumpTime > 300) setJumpTime(0)
      }
      // движение по горизонтали
      player.velocity.x = 0

      if (
        keys.pressedA &&
        (player.position.x > 300 ||
          startFinishCollisionBlocks.some(block => block.position.x === 0))
      ) {
        player.velocity.x = -4
      } else if (
        keys.pressedD &&
        (player.position.x < 600 ||
          startFinishCollisionBlocks.some(
            block => block.dimensions.width + block.position.x === 1024
          ))
      ) {
        player.velocity.x = 4
      } else {
        /** Тут нужно дописать кастомную логику для передвижения cropbox-а у картинка бэкграунда */
        // движение платформ
        if (keys.pressedD) {
          if (!checkNextPosition(player, collisionBlocks, -4)) {
            collisionBlocks.forEach(block => (block.position.x -= 4))
            startFinishCollisionBlocks.forEach(block => (block.position.x -= 4))
          }
        } else if (keys.pressedA) {
          if (!checkNextPosition(player, collisionBlocks, 4)) {
            collisionBlocks.forEach(block => (block.position.x += 4))
            startFinishCollisionBlocks.forEach(block => (block.position.x += 4))
          }
        }
      }
      player.update()
    }
  }, [keys, jumpTime])

  return update
}
