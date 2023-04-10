import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useCallback, useMemo } from 'react'
import { Player } from '@/components/organisms/game/game-view/models/Player'
import { useKeysHandlers } from '@/components/organisms/game/game-view/logics/use-keys-handlers'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'

type Props = {
  gameModel: GameModel
  keys: ReturnType<typeof useKeysHandlers>
  collisionBlocks: CollisionBlock[]
  onGameOver(): void
}
export const usePlayer = ({ gameModel, keys, collisionBlocks, onGameOver }: Props) => {
  const player = useMemo(() => {
    if (gameModel) {
      return new Player({
        position: { x: 32 * 5, y: 0 },
        dimensions: { width: 32, height: 64 },
        frameRate: 12,
        model: gameModel,
        collisionBlocks,
        onGameOver,
        imageSrc: '/assets/sprites/hero/idle.png',
      })
    }
  }, [gameModel])

  const update = useCallback(
    () => {
      if (player) {
        if (player.velocity.y === 0 && keys.pressedW) player.velocity.y = -12
        player.velocity.x = 0
        if (keys.pressedA) {
          player.velocity.x = -4
        } else if (keys.pressedD) {
          player.velocity.x = 4
        }
        player?.update()
      }
    },
    [keys, player]
  );

  return update;
}
