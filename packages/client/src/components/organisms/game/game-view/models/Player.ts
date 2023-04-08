import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'
import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { HEIGHT_VIEW } from '@/components/organisms/game/game.constants'

export class Player extends Sprite {
  velocity = {
    x: 0,
    y: 0,
  }

  gravity = 0.6
  constructor({ position, model, dimensions }: SpriteModel) {
    super({ position, model, dimensions })
    this.position = position
    this.model = model
    this.dimensions = dimensions
  }

  update() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.dimensions.height + this.velocity.y < HEIGHT_VIEW) {
      this.velocity.y += this.gravity
    } else {
      this.velocity.y = 0;
    }

    this.draw();
  }

  draw() {
    super.draw();
  }
}
