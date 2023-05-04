import styled from 'styled-components'
import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
} from '@/components/organisms/game/game.constants'
import { Button } from '@/components'

export const Wrapper = styled.div((props: { fullScreen?: boolean }) => {
  let main = `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const full = `
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    left: 0;
    z-index: 99999;
  `
  if (props.fullScreen) main += full
  return main
})

export const MainView = styled.div`
  position: absolute;
  width: ${WIDTH_VIEW}px;
  height: ${HEIGHT_VIEW}px;
`

export const Content = styled.div`
  font-family: '04B03';
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 115px;
`

export const BtnText = styled(Button)`
  font-size: 32px;
  padding: 0;
  width: fit-content;

  &:hover {
    text-decoration: none;
  }
`

export const FullScreenBtn = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 2;
  border: none;
  outline: none;
  right: 20px;
  top: 20px;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
  }
`
