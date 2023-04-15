import * as renderer from 'react-test-renderer'
import { ErrorBlock } from './error.component'

describe('Тест компонента ErrorBlock', () => {
  it('Тестирование снепшотом', () => {
    const component = renderer
      .create(<ErrorBlock code="404" text="sorry" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
