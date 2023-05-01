import { Coin } from '@/components/organisms/game/game-view/models/Coin'

import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
  BLOCK_SIZE,
} from '@/components/organisms/game/game.constants'

describe('Тест класса Coin', () => {
  let canvas, ctx: CanvasRenderingContext2D, coin: Coin
  beforeEach(() => {
    canvas = document.createElement('canvas')
    canvas.width = WIDTH_VIEW
    canvas.height = HEIGHT_VIEW
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    coin = new Coin({
      model: ctx,
      position: { x: 6 * BLOCK_SIZE, y: 3 * BLOCK_SIZE - 10 },
      frameRate: 4,
      frameBuffer: 15,
      imageSrc: '/assets/sprites/coin/coin.png',
      animations: {
        getCoin: {
          frameRate: 3,
          frameBuffer: 15,
          imageSrc: '/assets/sprites/coin/coinEffect.png',
        },
      },
    })
  })

  it('Проверяю инстанс класса', () => {
    expect(coin).toBeInstanceOf(Coin)
  })

  it('Проверяю изменение анимации', () => {
    const switchSpriteSpy = jest.spyOn(coin, 'switchSprite')
    coin.getCoin()
    expect(switchSpriteSpy).toHaveBeenCalledWith('getCoin')
  })

  it('Проверяю изменение анимации', () => {
    jest.useFakeTimers()
    coin.compeleAnimation = true
    coin.shouldDraw = true
    coin.getCoin()
    jest.runAllTimers()
    expect(coin.shouldDraw).toBe(false)
  })

  it('Проверяю вызов отрисовки', () => {
    const superDrawSpy = jest.spyOn(Coin.prototype, 'draw')
    coin.shouldDraw = true
    coin.compeleAnimation = false
    coin.draw()
    expect(superDrawSpy).toHaveBeenCalled()
  })

  it('Проверяю метод draw', () => {
    coin.draw()
    const events = ctx.__getEvents()
    expect(events).toMatchSnapshot()
  })
})
