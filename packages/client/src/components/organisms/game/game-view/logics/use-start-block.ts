import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import {
  parsedStartLvl1,
  START_SYMBOL,
} from '@/components/organisms/game/game-view/data/startLvl1'
import { BLOCK_SIZE } from '@/components/organisms/game/game.constants'

type Props = {
  gameModel: GameModel
  isEndedGame: boolean
}

export const useStartBlock = ({ gameModel, isEndedGame }: Props) => {
  const start = useMemo(() => {
    const result: CollisionBlock[] = []
    if (gameModel) {
      parsedStartLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === START_SYMBOL) {
            result.push(
              new CollisionBlock({
                model: gameModel,
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE + 3 },
                frameRate: 4,
                frameBuffer: 15,
                imageSrc: '/assets/sprites/cat/idle.png',
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel, isEndedGame])

  return start
}
