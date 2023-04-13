import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { useMemo } from 'react'
import { Coin } from '@/components/organisms/game/game-view/models/Coin'
import {
  COIN_SYMBOL,
  parsedCoinsLvl1,
} from '@/components/organisms/game/game-view/data/coinsLvl1'
import { BLOCK_SIZE } from '@/components/organisms/game/game.constants'

type Props = {
  gameModel: GameModel
}
export const useCoins = ({ gameModel }: Props) => {
  return useMemo(() => {
    const result: Coin[] = []
    if (gameModel) {
      parsedCoinsLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === COIN_SYMBOL) {
            result.push(
              new Coin({
                model: gameModel,
                dimensions: { width: BLOCK_SIZE, height: BLOCK_SIZE },
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE },
                color: '#17e4e7',
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel])
}
