import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Content = styled.section`
  flex: 1;
  display: flex;
  position: relative;
`

export const ImgRight = styled.img`
  position: absolute;
  right: 0;
  object-fit: contain;
  object-position: center;
  width: 10.9187rem;
  height: 10.9187rem;
  bottom: 20%;
`

export const ImgLeft = styled.img`
  position: absolute;
  left: 0;
  top: 20%;
  width: 5.3125rem;
  height: 12.75rem;
  object-fit: contain;
  object-position: center;
`
