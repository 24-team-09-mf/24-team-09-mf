const COINCOST = 100
const ENEMYCOST = 150

export const Points = (props: any) => {
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
