import * as renderer from 'react-test-renderer'
import { JungleHeader } from './jungleHeader.component'
describe('Тест компонента ErrorBlock', () => {
  it('Тестирование снепшотом', () => {
    const component = renderer
      .create(<JungleHeader title="hello world" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
