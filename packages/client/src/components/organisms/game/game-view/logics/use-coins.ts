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
  isEndedGame: boolean
}
export const useCoins = ({ gameModel, isEndedGame }: Props) => {
  return useMemo(() => {
    const result: Coin[] = []
    if (gameModel) {
      parsedCoinsLvl1.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol === COIN_SYMBOL) {
            result.push(
              new Coin({
                model: gameModel,
                position: { x: x * BLOCK_SIZE, y: y * BLOCK_SIZE - 0.03 },
                frameRate: 4,
                frameBuffer: 15,
                imageSrc: '/assets/sprites/coin/coin.png',
                animations: {
                  getCoin: {
                    frameRate: 3,
                    frameBuffer: 15,
                    imageSrc: '/assets/sprites/coin/coinEffect.png',
                  },
                },
              })
            )
          }
        })
      })
    }
    return result
  }, [gameModel, isEndedGame])
}
