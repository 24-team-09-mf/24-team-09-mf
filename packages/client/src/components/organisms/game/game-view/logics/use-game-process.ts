import { useEffect } from 'react'
import { useSprite } from '@/components/organisms/game/game-view/logics/use-sprite'
import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
} from '@/components/organisms/game/game.constants'
import {
  GameModel,
  GameViewProps,
} from '@/components/organisms/game/game-view/game-view.types'
import { useKeysHandlers } from '@/components/organisms/game/game-view/logics/use-keys-handlers'
import { usePlayer } from '@/components/organisms/game/game-view/logics/use-player'
import { useCollisionsBlock } from '@/components/organisms/game/game-view/logics/use-collisions-block'
import {
  useStartFinishCollisionBlocks
} from '@/components/organisms/game/game-view/logics/use-start-finish-collisions-block'
import { useCoins } from '@/components/organisms/game/game-view/logics/use-coins'

type Props = {
  gameModel: GameModel
  isStartedGame: GameViewProps['isStartedGame']
  isEndedGame: GameViewProps['isEndedGame']
  onGameOver: GameViewProps['onGameOver']
}
export const useGameProcess = ({
  gameModel,
  isStartedGame,
  isEndedGame,
  onGameOver,
}: Props) => {
  const keys = useKeysHandlers()
  const collisionBlocks = useCollisionsBlock({ gameModel })
  const startFinishCollisionBlocks = useStartFinishCollisionBlocks({ gameModel })
  const coins = useCoins({ gameModel });
  const gameBackground = useSprite({
    gameModel,
    position: {
      x: 0,
      y: 0,
    },
    dimensions: {
      width: WIDTH_VIEW * 2,
      height: HEIGHT_VIEW,
    },
    color: '#000',
  })

  const drawPlayer = usePlayer({
    gameModel,
    keys,
    collisionBlocks,
    onGameOver,
    startFinishCollisionBlocks,
    coins,
  })

  useEffect(() => {
    let requestId: number | null = null
    if (gameModel) {
      animate()
    }
    function animate() {
      requestId = null
      start()
      if (!isStartedGame && !isEndedGame) {
        console.log('draw start image')
      } else {
        gameBackground.draw()
        coins.forEach(block => block.draw())
        collisionBlocks.forEach(block => block.draw())
        startFinishCollisionBlocks.forEach(block => block.draw())
        drawPlayer()
      }
    }
    function start() {
      if (!requestId) requestId = window.requestAnimationFrame(animate)
    }

    return () => {
      if (requestId) {
        window.cancelAnimationFrame(requestId)
      }
    }
  }, [gameModel, isStartedGame, isEndedGame, drawPlayer, collisionBlocks, coins, startFinishCollisionBlocks])

  if (!gameModel) return null
}
