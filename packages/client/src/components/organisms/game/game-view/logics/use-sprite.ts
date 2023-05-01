import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'

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
  imageSrc,
  color,
}: Props) => {
  const background = useMemo(
    () =>
      new Sprite({
        model: gameModel,
        position,
        imageSrc,
        dimensions,
        color,
      }),
    [gameModel]
  )

  return background
}
