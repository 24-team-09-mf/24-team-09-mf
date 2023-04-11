import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'
import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { HEIGHT_VIEW } from '@/components/organisms/game/game.constants'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'

type Props = SpriteModel & {
  collisionBlocks: CollisionBlock[]
  onGameOver: () => void
  color?: string
  imageSrc?: string
}
export class Player extends Sprite {

  velocity = {
    x: 0,
    y: 0,
  }

  lastDirection = ''
  gravity = 0.6
  collisionBlocks: CollisionBlock[] = []
  frames = 0

  constructor({ position, model, dimensions, collisionBlocks, onGameOver, imageSrc, color, frameRate, animations }: Props) {
    super({ position, model, dimensions, imageSrc, color, frameRate, animations })
    this.position = position
    this.model = model
    this.dimensions = dimensions
    this.collisionBlocks = collisionBlocks
    this.gameOver = onGameOver
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  gameOver() { }

  update() {
    this.position.x += this.velocity.x
    this.checkHorizontalCollision()
    this.velocity.y += this.gravity
    this.position.y += this.velocity.y
    this.checkVerticalCollision()
    if (this.position.y + this.dimensions.height + this.velocity.y > HEIGHT_VIEW) {
      this.gameOver()
    }
    this.draw()
  }

  switchSprite(name: string) {

    const animation = this.animations?.[name]

    if (this.image === animation?.image) return

    this.currentFrame = 0

    if (animation?.image) {
      this.image = animation.image
      this.dimensions = animation.dimensions
      this.frameRate = animation.frameRate || 1
      this.framesBuffer = animation.frameBuffer || 2
    }
  }

  checkHorizontalCollision() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]
      if (this.checkCollision(collisionBlock)) {
        if (this.velocity.x < 0) {
          this.position.x =
            collisionBlock.position.x + collisionBlock.dimensions.width + 0.03
          break
        }
        if (this.velocity.x > 0) {
          this.position.x =
            collisionBlock.position.x - this.dimensions.width - 0.03
          break
        }
      }
    }
  }

  checkVerticalCollision() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]
      if (this.checkCollision(collisionBlock)) {
        // столкновение по оси Х идущей влево
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.position.y = collisionBlock.position.y + collisionBlock.dimensions.height + 0.03
          break
        }
        // столкновение по оси Х идущей вправо
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.position.y =
            collisionBlock.position.y - this.dimensions.height - 0.03
          break
        }
      }
    }
  }

  checkCollision(collisionBlock: CollisionBlock) {
    return this.position.x <=
      collisionBlock.position.x + collisionBlock.dimensions.width &&
      this.position.x + this.dimensions.width >= collisionBlock.position.x &&
      this.position.y + this.dimensions.height >= collisionBlock.position.y &&
      this.position.y <=
      collisionBlock.position.y + collisionBlock.dimensions.height
  }

  draw() {
    super.draw()
  }
}
