import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid var(--color-green2);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
  margin: 50px;
`
