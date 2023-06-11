import styled from 'styled-components'
import { Content as ContentComponent } from '../game.styles'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
`
export const Content = styled(ContentComponent)`
  margin: 0;
  height: 100%;
  width: 100%;
  justify-content: right;
  align-items: flex-start;
  flex-direction: row;
  padding: 34px 90px 0 90px;
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  color: white;
  text-align: right;
`
