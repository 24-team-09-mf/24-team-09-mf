import { Coin } from '@/components/organisms/game/game-view/models/Coin'
import { Enemy } from '@/components/organisms/game/game-view/models/Enemy'

const COINCOST = 100
const ENEMYCOST = 150

type pointsProps = {
  coins: Coin[]
  enemies: Enemy[]
}

export const Points = (props: pointsProps) => {
  let coinsPoints = props.coins.length * COINCOST
  let enemyPoints = props.enemies.length * ENEMYCOST

  props.coins.forEach(el => {
    if (el.shouldDraw) {
      coinsPoints -= COINCOST
    }
  })

  props.enemies.forEach(el => {
    if (el.shouldDraw) {
      enemyPoints -= ENEMYCOST
    }
  })

  return coinsPoints + enemyPoints
}
