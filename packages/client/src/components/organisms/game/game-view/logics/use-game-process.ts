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
import { useStartFinishCollisionBlocks } from '@/components/organisms/game/game-view/logics/use-start-finish-collisions-block'
import { useCoins } from '@/components/organisms/game/game-view/logics/use-coins'
import { useEnemies } from '@/components/organisms/game/game-view/logics/use-enemies'
import { Points } from '@/components/organisms/game/game-view/logics/use-points'

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
  // game block start
  const collisionBlocks = useCollisionsBlock({ gameModel, isEndedGame })
  const startFinishCollisionBlocks = useStartFinishCollisionBlocks({
    gameModel,
    isEndedGame,
  })
  const coins = useCoins({ gameModel, isEndedGame })
  const [enemies, enemiesCollisionBlocks] = useEnemies({
    gameModel,
    isEndedGame,
  })

  const drawPlayer = usePlayer({
    gameModel,
    keys,
    collisionBlocks,
    onGameOver,
    startFinishCollisionBlocks,
    coins,
    enemies,
    enemiesCollisionBlocks,
    isEndedGame,
  })

  let points = 0
  // game block end

  const startGameBackground = useSprite({
    gameModel,
    position: {
      x: 0,
      y: 0,
    },
    dimensions: {
      width: WIDTH_VIEW,
      height: HEIGHT_VIEW,
    },
    imageSrc: '/assets/startGame.png',
  })

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
    imageSrc: '/assets/background.png',
  })

  points = Points({ coins: coins, enemies: enemies })

  useEffect(() => {
    let requestId: number | null = null
    if (gameModel) {
      animate()
    }
    function animate() {
      requestId = null
      start()
      if (!isStartedGame && !isEndedGame) {
        startGameBackground.draw()
      } else {
        if (!isEndedGame) {
          gameBackground.draw()
          coins.forEach(block => block.draw())
          collisionBlocks.forEach(block => block.draw())
          startFinishCollisionBlocks.forEach(block => block.draw())
          enemies.forEach(enemy => enemy.update())
          collisionBlocks.forEach(block => block.draw())
          drawPlayer()
        } else {
          startGameBackground.draw()
        }
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
  }, [
    gameModel,
    isStartedGame,
    isEndedGame,
    drawPlayer,
    collisionBlocks,
    coins,
    startFinishCollisionBlocks,
    enemies,
  ])

  if (!gameModel) return null
}
