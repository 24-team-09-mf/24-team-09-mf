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

  cropbox?= {
    width: 0,
    height: 0,
  }

  model: GameModel = null
  color = ''
  imageSrc?= ''


  constructor({ position, model, dimensions, color, cropbox, imageSrc }: SpriteModel) {
    this.position = position;
    this.model = model;
    this.dimensions = dimensions
    this.cropbox = cropbox
    this.color = color || 'red'
    this.imageSrc = imageSrc || undefined
  }

  draw() {
    if (this.model) {
      if (this.imageSrc) {
        console.log(this.imageSrc);
        const image = new Image();
        image.src = this.imageSrc;
        image.onload = () => {
          if (this.cropbox) {
            this.model?.drawImage(
              image,
              0,
              0,
              this.cropbox.width,
              this.cropbox.height,
              this.position.x,
              this.position.y,
              this.dimensions.width,
              this.dimensions.height
            );
          }
        }
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
}
