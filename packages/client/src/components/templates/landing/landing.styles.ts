import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px 0;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
`
export const Section = styled.section`
  margin: 40px 0;
`
export const GameGif = styled.img`
  margin: 0 40px 0 0;
`

export const GameProcess = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  } ;
`
