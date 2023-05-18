import { render, screen } from '@testing-library/react'
import { GameView } from './game-view.component'

import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
} from '@/components/organisms/game/game.constants'
import { Provider } from 'react-redux'
import { createStore } from '@/store'

import { ApiService } from '@/services/apiService'
import { AuthService } from '@/api/authService'

const mockGameOver = jest.fn()

const services = {
  user: new ApiService(new AuthService()),
}

const store = createStore(services)

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <GameView
        isStartedGame={true}
        isEndedGame={false}
        onGameOver={mockGameOver}
      />
    </Provider>
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
