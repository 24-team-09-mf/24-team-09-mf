import { Button } from '@/components/atoms'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 0.0625rem solid rgba(87, 153, 69, 0.5);
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75rem;
  padding-block: 1.25rem;
  margin: 0 auto;
`

export const Navigation = styled.nav`
  display: flex;
  gap: 2.125rem;
  align-items: center;
`

export const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
  object-position: center;
`

export const Text = styled(NavLink)`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #000000;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #579945;
  }

  &.active {
    text-decoration: underline;
    color: #579945;
  }
`

export const Btn = styled(Button)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.75rem;
`

export const Profile = styled(NavLink)`
  display: flex;
  gap: 0.625rem;
  cursor: pointer;
  color: #000000;

  &.active {
    color: #579945;
  }
`

export const User = styled.p`
  font-size: 1.25rem;
  line-height: 1.6875rem;

  &:hover {
    text-decoration: underline;
    color: #579945;
  }
`

export const LinkComponent = styled(Link)``
