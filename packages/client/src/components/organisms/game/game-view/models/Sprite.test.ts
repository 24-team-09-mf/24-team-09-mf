import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'

import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
} from '@/components/organisms/game/game.constants'

describe('Тест класса Sprite', () => {
  let canvas, ctx: CanvasRenderingContext2D, sprite: Sprite
  beforeEach(() => {
    canvas = document.createElement('canvas')
    canvas.width = WIDTH_VIEW
    canvas.height = HEIGHT_VIEW
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    sprite = new Sprite({
      position: {
        x: 100,
        y: 100,
      },
      model: ctx as unknown as CanvasRenderingContext2D,
      imageSrc: '/assets/background.png',
      dimensions: {
        width: WIDTH_VIEW * 2,
        height: HEIGHT_VIEW,
      },
    })
  })

  it('Проверяю инстанс класса', () => {
    expect(sprite).toBeInstanceOf(Sprite)
  })

  it('Проверяю position', () => {
    expect(sprite.position).toEqual({ x: 100, y: 100 })
  })

  it('Проверяю dimensions', () => {
    expect(sprite.dimensions).toEqual({
      width: WIDTH_VIEW * 2,
      height: HEIGHT_VIEW,
    })
  })

  it('Проверяю метод draw', () => {
    sprite.draw()
    const events = ctx.__getEvents()
    expect(events).toMatchSnapshot()
  })

  it('Проверяю метод updateFrames', () => {
    expect(sprite.elapsedFrames).toBe(0)
    sprite.updateFrames()
    expect(sprite.elapsedFrames).toBe(1)
  })
})
