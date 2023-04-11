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
        frameRate: 12,
        model: gameModel,
        collisionBlocks,
        onGameOver,
        imageSrc: '/assets/sprites/hero/idle.png',
        animations: {
          idleRight: {
            frameRate: 12,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/idle.png'
          },
          idleLeft: {
            frameRate: 12,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/idleLeft.png'
          },
          runRight: {
            frameRate: 8,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/run.png'
          },
          runLeft: {
            frameRate: 8,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/runLeft.png'
          },
          jumpRight: {
            frameRate: 4,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/jump.png'
          },
          jumpLeft: {
            frameRate: 4,
            frameBuffer: 10,
            imageSrc: '/assets/sprites/hero/jumpLeft.png'
          }
        }
      })
    }
  }, [gameModel])

  const update = useCallback(
    () => {
      if (player) {
        if (player.velocity.y === 0 && keys.pressedW) {
          player.velocity.y = -10
        }
        player.velocity.x = 0
        if (keys.pressedA) {
          player.velocity.x = -4
          player.switchSprite('runLeft')
          player.lastDirection = 'left'
        } else if (keys.pressedD) {
          console.log('D');
          player.velocity.x = 4
          player.switchSprite('runRight')
          console.log(player.position.x);
          player.lastDirection = 'right'
        } else if (keys.pressedW) {
          console.log('W');
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
        player?.update()
      }
    },
    [keys]
  );

  return update;
}
