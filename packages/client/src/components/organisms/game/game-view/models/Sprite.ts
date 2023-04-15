import { GameModel, SrpiteAnimation, SpriteModel } from '@/components/organisms/game/game-view/game-view.types'

export class Sprite {
  position = {
    x: 0,
    y: 0,
  }

  dimensions = {
    width: 0,
    height: 0,
  }

  animations?: SrpiteAnimation

  model: GameModel = null
  color = ''
  imageSrc?= ''
  image: HTMLImageElement = new Image()

  frameRate = 1
  currentFrame = 0
  elapsedFrames = 0
  frameBuffer = 10

  constructor({ position, model, color, imageSrc, dimensions, frameRate, frameBuffer, animations }: SpriteModel) {
    this.position = position
    this.model = model
    this.color = color || 'red'
    this.imageSrc = imageSrc || undefined

    if (dimensions) {
      this.dimensions = dimensions
    }

    if (frameRate) {
      this.frameRate = frameRate
    }

    if (frameBuffer) {
      this.frameBuffer = frameBuffer
    }

    if (animations) {
      this.animations = animations

      if (this.animations) {
        for (const key in this.animations) {
          const image = new Image()
          image.src = this.animations[key].imageSrc
          this.animations[key].image = image
        }
      }
    }

    this.image = new Image()
    if (this.imageSrc) {
      this.image.src = this.imageSrc
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
      // TODO: можно будет удалить на конечном этапе
      else {
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

  updateFrames() {
    this.elapsedFrames++

    if (this.elapsedFrames % this.frameBuffer === 0) {
      if (this.currentFrame < this.frameRate - 1) {
        this.currentFrame++
      } else {
        this.currentFrame = 0
      }
    }
  }
}
