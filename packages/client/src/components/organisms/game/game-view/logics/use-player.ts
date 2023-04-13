import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useCallback, useMemo, useState } from 'react'
import { Player } from '@/components/organisms/game/game-view/models/Player'
import { useKeysHandlers } from '@/components/organisms/game/game-view/logics/use-keys-handlers'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'

type Props = {
  gameModel: GameModel
  keys: ReturnType<typeof useKeysHandlers>
  collisionBlocks: CollisionBlock[]
  onGameOver(): void
}
export const usePlayer = ({
  gameModel,
  keys,
  collisionBlocks,
  onGameOver,
}: Props) => {
  const [jumpTime, setJumpTime] = useState(0)

  const player = useMemo(() => {
    if (gameModel) {
      return new Player({
        position: { x: 32 * 5, y: 0 },
        dimensions: { width: 32, height: 64 },
        model: gameModel,
        collisionBlocks,
        onGameOver,
      })
    }
  }, [gameModel])

  const update = useCallback(() => {
    if (player) {
      if (player.velocity.y === 0 && keys.pressedW && !jumpTime) {
        player.velocity.y = -12
        setJumpTime(performance.now())
      }
      if (jumpTime) {
        const n = performance.now()
        if (n - jumpTime > 300) setJumpTime(0)
      }
      player.velocity.x = 0
      if (keys.pressedA) {
        player.velocity.x = -4
      } else if (keys.pressedD) {
        player.velocity.x = 4
      }
      player.update()
    }
  }, [keys, jumpTime])

  return update
}
