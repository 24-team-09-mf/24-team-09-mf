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
  padding: 15px 30px 0;
  justify-content: flex-end;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  color: white;
  text-align: right;
`
