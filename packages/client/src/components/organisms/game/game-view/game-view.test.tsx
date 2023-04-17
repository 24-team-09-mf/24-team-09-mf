import { render, screen } from '@testing-library/react'
import { GameView } from './game-view.component'

import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
} from '@/components/organisms/game/game.constants'

const mockGameOver = jest.fn()

const setup = () => {
  const utils = render(
    <GameView
      isStartedGame={true}
      isEndedGame={false}
      onGameOver={mockGameOver}
    />
  )
  const canvas = screen.getByTestId('game-view') as HTMLCanvasElement
  return { canvas, ...utils }
}

describe('Тестирование компонента Game-view', () => {
  const { canvas } = setup()

  it('Проверяю рендер canvas элемента', () => {
    expect(canvas).toBeInTheDocument()
  })

  it('Проверяю размеры canvas view', () => {
    expect(canvas.width).toBe(WIDTH_VIEW)
    expect(canvas.height).toBe(HEIGHT_VIEW)
  })
})
