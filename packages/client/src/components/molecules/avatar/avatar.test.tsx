import * as renderer from 'react-test-renderer'
import { Avatar } from './avatar.component'

describe('Тест компонента Avatar', () => {
  it('Тестирование снепшотом', () => {
    const component = renderer.create(<Avatar />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
