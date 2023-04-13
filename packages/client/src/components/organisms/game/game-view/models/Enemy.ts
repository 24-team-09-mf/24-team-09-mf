import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'
import { Coin } from '@/components/organisms/game/game-view/models/Coin'

type Props = SpriteModel & {
  collisionBlocks: CollisionBlock[]
  startVelocity: number
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
    dimensions,
    startVelocity,
    ...props
  }: Props) {
    super({ ...props, dimensions, position })
    this.collisionBlocks = collisionBlocks
    this.dimensions = dimensions
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

  checkHorizontalCollision() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]
      if (this.checkCollision(collisionBlock)) {
        this.velocity.x = this.velocity.x * -1
        break
      }
    }
  }

  checkCollision(collisionBlock: CollisionBlock) {
    return (
      this.position.x <=
        collisionBlock.position.x + collisionBlock.dimensions.width &&
      this.position.x + this.dimensions.width >= collisionBlock.position.x &&
      this.position.y === collisionBlock.position.y - 0.03
    )
  }

  draw() {
    if (this.shouldDraw) super.draw()
  }
}
