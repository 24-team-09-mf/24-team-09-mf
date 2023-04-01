import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useCallback } from 'react'

type Props = {
  gameModel: GameModel
  position: {
    x: number
    y: number
  }
  dimensions: {
    width: number
    height: number
  }
  color?: string
}
export const useSprite = ({
  gameModel,
  position,
  dimensions,
  color,
}: Props) => {
  const draw = useCallback(() => {
    //TODO отрисовка наших изображений будет тут
    if (gameModel) {
      gameModel.fillStyle = color || '#000'
      gameModel.fillRect(
        position.x,
        position.y,
        dimensions.width,
        dimensions.height
      )
    }
  }, [gameModel, position, dimensions])

  return [draw]
}
