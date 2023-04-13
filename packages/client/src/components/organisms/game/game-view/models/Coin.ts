import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'

export class Coin extends Sprite {
  shouldDraw = true
  constructor(props: SpriteModel) {
    super(props)
  }

  getCoin() {
    this.shouldDraw = false
    console.log('get coin, you should update score on one')
  }
  draw() {
    if (this.shouldDraw) {
      super.draw()
    }
  }
}
