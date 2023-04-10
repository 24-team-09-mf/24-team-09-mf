import { GameModel, SpriteModel } from '@/components/organisms/game/game-view/game-view.types'

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
  imageSrc?= ''
  image: HTMLImageElement = new Image()

  frameRate = 1
  currentFrame = 0
  elapsedFrames = 0
  framesBuffer = 6

  constructor({ position, model, dimensions, color, imageSrc, frameRate }: SpriteModel) {
    this.position = position;
    this.model = model;
    this.dimensions = dimensions

    this.color = color || 'red'
    this.imageSrc = imageSrc || undefined
    this.frameRate = frameRate

    this.image = new Image();
    if (this.imageSrc) {
      this.image.src = this.imageSrc;
    }
    this.image.onload = () => {
      this.dimensions.width = this.image.width / this.frameRate
      this.dimensions.height = this.image.height
    }
  }

  draw() {
    if (this.model) {
      if (this.imageSrc) {
        const cropbox = {
          position: {
            x: this.dimensions.width * this.currentFrame,
            y: 0
          },
          width: this.dimensions.width,
          height: this.dimensions.height
        }

        this.model.drawImage(
          this.image,
          cropbox.position.x,
          cropbox.position.y,
          cropbox.width,
          cropbox.height,
          this.position.x,
          this.position.y,
          this.dimensions.width,
          this.dimensions.height
        )

        this.updateFrames()
      }
      else {
        this.model.fillStyle = this.color;
        this.model.fillRect(
          this.position.x,
          this.position.y,
          this.dimensions.width,
          this.dimensions.height
        )
      }
    }
  }

  updateFrames() {
    this.elapsedFrames++

    if (this.elapsedFrames % this.framesBuffer === 0) {
      if (this.currentFrame < this.frameRate - 1) {
        this.currentFrame++
      }
      else {
        this.currentFrame = 0
      }
    }
  }
}
