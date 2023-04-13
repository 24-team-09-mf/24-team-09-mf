import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useCallback, useMemo } from 'react'
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
  color,
}: Props) => {
  const backgorund = useMemo(() => new Sprite({
    model: gameModel,
    position,
    dimensions,
    color
  }), [gameModel]);

  return backgorund
}
