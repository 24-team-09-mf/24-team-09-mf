import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'

export class BackgroundGame extends Sprite {
  constructor(props: SpriteModel) {
    super(props)
  }

  draw() {
    if (this.model) {
      this.model.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.dimensions.width,
        this.dimensions.height
      )
    }
  }
}
