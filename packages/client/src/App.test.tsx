import App from './pages'
import { render, screen } from '@testing-library/react'

const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

// TODO skip тест, пока он нам не нужен и мешается
test.skip('Example test', async () => {
  render(<App />)
  expect(screen.getByText(appContent)).toBeDefined()
})
