import { Player } from '@/components/organisms/game/game-view/models/Player'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'
import { Coin } from '@/components/organisms/game/game-view/models/Coin'
import { Enemy } from '@/components/organisms/game/game-view/models/Enemy'

import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
} from '@/components/organisms/game/game.constants'

const animations = {
  idleLeft: {
    frameRate: 12,
    frameBuffer: 10,
    imageSrc: '/assets/sprites/hero/idleLeft.png',
  },
  runRight: {
    frameRate: 8,
    frameBuffer: 10,
    imageSrc: '/assets/sprites/hero/run.png',
  },
}

describe('Тестирую класс Player', () => {
  let canvas, ctx: CanvasRenderingContext2D, player: Player

  beforeEach(() => {
    canvas = document.createElement('canvas')
    canvas.width = WIDTH_VIEW
    canvas.height = HEIGHT_VIEW
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    const position = { x: 0, y: 0 }
    const model = ctx
    const collisionBlocks: CollisionBlock[] = []
    const coins: Coin[] = []
    const enemies: Enemy[] = []
    const onGameOver = jest.fn()
    const imageSrc = '/assets/sprites/hero/idle.png'
    player = new Player({
      position,
      model,
      collisionBlocks,
      coins,
      enemies,
      onGameOver,
      imageSrc,
      animations,
    })
  })

  it('Проверяю инициализацию класса', () => {
    expect(player).toBeInstanceOf(Player)
    expect(player.position).toEqual({ x: 0, y: 0 })
    expect(player.model).toBe(ctx)
    expect(player.collisionBlocks).toEqual([])
    expect(player.coins).toEqual([])
    expect(player.enemies).toEqual([])
    expect(player.imageSrc).toBe('/assets/sprites/hero/idle.png')
    expect(player.animations).toEqual(animations)
  })

  it('Проверяю передвижении игрока', () => {
    player.velocity = { x: 2, y: 0 }
    player.update()
    expect(player.position).toEqual({ x: 2, y: 0.6 })
  })
})
