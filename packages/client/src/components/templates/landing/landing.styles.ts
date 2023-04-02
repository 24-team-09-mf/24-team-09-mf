import { Link } from 'react-router-dom'
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

export const SignUpLink = styled(Link)`
  color: #ffffff;
  border: 0.0625rem solid transparent;
  background-color: #579945;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  text-align: center;
  width: 250px;
  cursor: pointer;
  margin: 20px 0;
  font-size: 16px;
  transition: 0.3s ease;
  &: hover {
    opacity: 0.8;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
  }
`
