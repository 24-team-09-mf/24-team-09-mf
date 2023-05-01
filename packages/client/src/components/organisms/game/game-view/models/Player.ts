import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'
import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { HEIGHT_VIEW } from '@/components/organisms/game/game.constants'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import { Coin } from '@/components/organisms/game/game-view/models/Coin'
import { Enemy } from '@/components/organisms/game/game-view/models/Enemy'

type Props = SpriteModel & {
  collisionBlocks: CollisionBlock[]
  coins: Coin[]
  enemies: Enemy[]
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
  coins: Coin[] = []
  enemies: Enemy[] = []

  constructor({
    position,
    model,
    collisionBlocks,
    coins,
    enemies,
    onGameOver,
    imageSrc, color, frameRate, animations
  }: Props) {
    super({ position, model, imageSrc, color, frameRate, animations })
    this.position = position
    this.model = model
    this.collisionBlocks = collisionBlocks
    this.coins = coins
    this.enemies = enemies
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

    this.checkCoinCollision()
    this.checkEnemiesCollision()
    if (
      this.position.y + this.dimensions.height + this.velocity.y >
      HEIGHT_VIEW
    ) {
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
      this.frameRate = animation.frameRate || 1
      this.frameBuffer = animation.frameBuffer || 2
    }
  }

  checkEnemiesCollision() {
    for (let i = 0; i < this.enemies.length; i++) {
      const enemy = this.enemies[i]
      if (enemy.shouldDraw) {
        if (
          this.position.x <= enemy.position.x + enemy.dimensions.width &&
          this.position.x + this.dimensions.width >= enemy.position.x &&
          enemy.position.y - (this.position.y + this.dimensions.height) <=
          0.5 &&
          enemy.position.y - (this.position.y + this.dimensions.height) > -0.3
        ) {
          enemy.destroyEnemy()
          return
        }

        if (
          this.position.x <= enemy.position.x + enemy.dimensions.width &&
          this.position.x + this.dimensions.width >= enemy.position.x &&
          this.position.y + this.dimensions.height > enemy.position.y &&
          this.position.y + this.dimensions.height <=
          enemy.position.y + enemy.dimensions.height
        ) {
          this.gameOver()
          break
        }
      }
    }
  }

  checkCoinCollision() {
    for (let i = 0; i < this.coins.length; i++) {
      const coin = this.coins[i]
      if (this.checkCollision(coin)) {
        if (coin.shouldDraw) {
          coin.getCoin()
          break
        }
      }
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
        if (this.velocity.y < 0) {
          this.velocity.y = 0
          this.position.y = collisionBlock.position.y + collisionBlock.dimensions.height + 0.03
          break
        }
        if (this.velocity.y > 0) {
          this.velocity.y = 0
          this.position.y =
            collisionBlock.position.y - this.dimensions.height - 0.03
          break
        }
      }
    }
  }

  checkCollision(collisionBlock: CollisionBlock | Coin) {
    return (
      this.position.x <=
      collisionBlock.position.x + collisionBlock.dimensions.width &&
      this.position.x + this.dimensions.width >= collisionBlock.position.x &&
      this.position.y + this.dimensions.height >= collisionBlock.position.y &&
      this.position.y <=
      collisionBlock.position.y + collisionBlock.dimensions.height
    )
  }

  draw() {
    super.draw()
  }
}
