import {
  GameModel,
  SpriteModel,
} from '@/components/organisms/game/game-view/game-view.types'

export class Sprite {
  position = {
    x: 0,
    y: 0,
  }

  dimensions = {
    width: 0,
    height: 0,
  }

  model: GameModel = null
  color = ''
  constructor({ position, model, dimensions, color }: SpriteModel) {
    this.position = position
    this.model = model
    this.dimensions = dimensions
    this.color = color || 'red'
  }

  draw() {
    if (this.model) {
      this.model.fillStyle = this.color
      this.model.fillRect(
        this.position.x,
        this.position.y,
        this.dimensions.width,
        this.dimensions.height
      )
    }
  }
}
