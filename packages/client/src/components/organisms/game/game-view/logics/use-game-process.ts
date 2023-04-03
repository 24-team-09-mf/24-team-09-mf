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

type Props = {
  gameModel: GameModel
  isStartedGame: GameViewProps['isStartedGame']
}
export const useGameProcess = ({ gameModel, isStartedGame }: Props) => {
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
    color: 'black',
  })
  const [drawSpritePlayer] = useSprite({
    gameModel,
    position: {
      x: 820,
      y: 350,
    },
    dimensions: {
      width: 80,
      height: 140,
    },
    color: 'red',
  })

  const [drawPlayer] = useSprite({
    gameModel,
    position: {
      x: 0,
      y: 0,
    },
    dimensions: {
      width: 80,
      height: 140,
    },
    color: 'red',
  })

  useEffect(() => {
    let requestId: number | null = null
    if (gameModel) {
      animate()
    }
    function animate() {
      requestId = null
      start()
      drawBackground()
      if (!isStartedGame) {
        drawSpritePlayer()
      } else {
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
  }, [gameModel, isStartedGame])
}
