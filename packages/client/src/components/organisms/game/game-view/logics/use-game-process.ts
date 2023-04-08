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

type Props = {
  gameModel: GameModel
  isStartedGame: GameViewProps['isStartedGame']
  isEndedGame: GameViewProps['isEndedGame']
}
export const useGameProcess = ({
  gameModel,
  isStartedGame,
  isEndedGame,
}: Props) => {
  const keys = useKeysHandlers()
  const drawPlayer = usePlayer({ gameModel, keys });

  const [drawBackground] = useSprite({
    gameModel,
    position: {
      x: 0,
      y: 0,
    },
    dimensions: {
      width: WIDTH_VIEW,
      height: HEIGHT_VIEW,
    },
    color: '#192C3B',
    imageSrc: '/assets/startGame.png'
  })

  const [drawGameBackground] = useSprite({
    gameModel,
    position: {
      x: 0,
      y: 0,
    },
    dimensions: {
      width: WIDTH_VIEW,
      height: HEIGHT_VIEW,
    },
    color: '#000',
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
        drawBackground();
      } else {
        drawGameBackground()
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
  }, [gameModel, isStartedGame, isEndedGame, drawPlayer])

  if (!gameModel) return null
}
