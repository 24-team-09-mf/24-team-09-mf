import { Enemy } from '@/components/organisms/game/game-view/models/Enemy'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'

import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
  BLOCK_SIZE,
} from '@/components/organisms/game/game.constants'

describe('Тест класса Enemy', () => {
  let canvas,
    ctx: CanvasRenderingContext2D,
    enemy: Enemy,
    collisionBlock: CollisionBlock
  beforeEach(() => {
    canvas = document.createElement('canvas')
    canvas.width = WIDTH_VIEW
    canvas.height = HEIGHT_VIEW
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    collisionBlock = new CollisionBlock({
      model: ctx,
      dimensions: { width: BLOCK_SIZE, height: BLOCK_SIZE },
      position: { x: 6 * BLOCK_SIZE, y: 12 * BLOCK_SIZE - 8 },
    })

    enemy = new Enemy({
      model: ctx,
      frameRate: 8,
      imageSrc: '/assets/sprites/cat/runLeft.png',
      position: { x: 6 * BLOCK_SIZE, y: 12 * BLOCK_SIZE - 8 },
      collisionBlocks: [collisionBlock],
      startVelocity: 2,
      animations: {
        runRight: {
          frameRate: 8,
          frameBuffer: 13,
          imageSrc: '/assets/sprites/cat/run.png',
        },
        runLeft: {
          frameRate: 8,
          frameBuffer: 13,
          imageSrc: '/assets/sprites/cat/runLeft.png',
        },
      },
    })
  })

  it('Проверяю инстанс класса', () => {
    expect(enemy).toBeInstanceOf(Enemy)
  })

  it('Проверяю метод destroyEnemy', () => {
    enemy.destroyEnemy()
    expect(enemy.shouldDraw).toBeFalsy()
  })

  it('Проверяю коллизию', () => {
    enemy.position.x =
      collisionBlock.position.x + collisionBlock.dimensions.width / 2
    expect(enemy.checkCollision(collisionBlock)).toBeTruthy()
  })

  it('Проверяю изменение анимации движения', () => {
    enemy.switchSprite('runLeft')
    expect(enemy.image).toBe(enemy.animations!.runLeft.image)
    expect(enemy.frameRate).toBe(enemy.animations!.runLeft.frameRate)
    expect(enemy.frameBuffer).toBe(enemy.animations!.runLeft.frameBuffer)
  })

  it('Проверяю метод draw', () => {
    enemy.draw()
    const events = ctx.__getEvents()
    expect(events).toMatchSnapshot()
  })
})
