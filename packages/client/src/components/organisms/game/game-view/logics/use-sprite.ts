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
  imageSrc?: string
}

export const useSprite = ({
  gameModel,
  position,
  dimensions,
  color,
  imageSrc,
}: Props) => {

  const draw = useCallback(() => {

    //TODO отрисовка наших изображений будет тут
    if (gameModel) {
      if (imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
          gameModel.drawImage(
            image,
            position.x,
            position.y,
            dimensions.width,
            dimensions.height
          );
        };
      } else {
        gameModel.fillStyle = color || '#000';
        gameModel.fillRect(
          position.x,
          position.y,
          dimensions.width,
          dimensions.height
        );
      }
    }
  }, [gameModel, position, dimensions])

  return [draw]
}
