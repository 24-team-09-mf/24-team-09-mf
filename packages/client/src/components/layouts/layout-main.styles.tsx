import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Content = styled.main`
  flex: 1;
  display: flex;
  position: relative;
`

export const ImgRight = styled.img`
  position: absolute;
  right: 0;
  object-fit: contain;
  object-position: center;
  width: 5rem;
  height: 12rem;
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
