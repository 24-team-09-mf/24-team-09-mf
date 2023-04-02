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
  isEndedGame: GameViewProps['isEndedGame']
}
export const useGameProcess = ({ gameModel, isStartedGame, isEndedGame }: Props) => {
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
    imageSrc:'/assets/sprites/hero/idle1.png'
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

      if (!isStartedGame) {
        drawBackground()
        // drawSpritePlayer()
      } else if (!isEndedGame) {
        drawBackground()
      }
      else {
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
  }, [gameModel, isStartedGame, isEndedGame])
}
