import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useCallback, useMemo } from 'react'
import { Player } from '@/components/organisms/game/game-view/models/Player'
import { useKeysHandlers } from '@/components/organisms/game/game-view/logics/use-keys-handlers'

type Props = {
  gameModel: GameModel;
  keys: ReturnType<typeof useKeysHandlers>
}
export const usePlayer = ({ gameModel, keys }: Props) => {
  const player = useMemo(() => {
    if (gameModel) {
      return new Player({
        position: { x: 0, y: 0 },
        dimensions: { width: 50, height: 100 },
        model: gameModel,
      })
    }
  }, [gameModel])

  const update = useCallback(
    () => {
      if (player) {
        if (player.velocity.y === 0 && keys.pressedW) player.velocity.y = -10
        player.velocity.x = 0
        if (keys.pressedA) {
          player.velocity.x = -4
        } else if (keys.pressedD) {
          player.velocity.x = 4
        }
        player?.update()
      }
    },
    [keys]
  );

  return update;
}
