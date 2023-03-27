import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  text-align: center;
`

export const FooterText = styled.p`
  margin-block-end: 1.125rem;
`

export const LinkComponent = styled(Link)`
  color: #000000;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #579945;
  }
`

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`
