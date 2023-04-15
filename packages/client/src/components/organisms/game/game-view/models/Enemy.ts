import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'

type Props = SpriteModel & {
  collisionBlocks: CollisionBlock[]
  startVelocity: number
  imageSrc?: string
}
export class Enemy extends Sprite {
  collisionBlocks: CollisionBlock[] = []
  velocity = {
    x: 0,
  }
  shouldDraw = true
  constructor({
    collisionBlocks,
    position,
    startVelocity,
    imageSrc,
    frameRate,
    animations,
    ...props
  }: Props) {
    super({ ...props, position, imageSrc, frameRate, animations })
    this.collisionBlocks = collisionBlocks
    this.position = position
    this.velocity.x = startVelocity
  }

  destroyEnemy() {
    this.shouldDraw = false
    console.log('destroy enemy')
  }

  update() {
    this.position.x += this.velocity.x
    this.checkHorizontalCollision()
    this.draw()
  }

  switchSprite(name: string) {

    const animation = this.animations?.[name]
    if (this.image === animation?.image) return

    this.currentFrame = 0

    if (animation?.image) {
      this.image = animation.image
      this.frameRate = animation.frameRate || 1
      this.frameBuffer = animation.frameBuffer || 2
    }
  }

  checkHorizontalCollision() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]
      if (this.checkCollision(collisionBlock)) {
        this.velocity.x = this.velocity.x * -1
        const animationName = this.velocity.x > 0 ? 'runRight' : 'runLeft'
        this.switchSprite(animationName)
        break
      }
    }
  }

  checkCollision(collisionBlock: CollisionBlock) {
    return (
      this.position.x <=
      collisionBlock.position.x + collisionBlock.dimensions.width &&
      this.position.x + this.dimensions.width >= collisionBlock.position.x &&
      this.position.y === collisionBlock.position.y
    )
  }

  draw() {
    if (this.shouldDraw) super.draw()
  }
}
