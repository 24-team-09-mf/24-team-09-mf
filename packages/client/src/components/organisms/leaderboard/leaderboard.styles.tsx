import styled from 'styled-components'
import { Input } from '@/components/molecules'

export const H2 = styled.h2((props: { marginBottom?: string }) => {
  const marginBottom = props.marginBottom ? props.marginBottom : '1.875rem'
  return `
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: ${marginBottom};
  `
})

export const Wrapper = styled.div`
  width: 64rem;
  margin: 0 auto;
`

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
`

export const ControlTitle = styled.div`
  font-size: 0.875rem;
  margin-right: 1.25rem;
  font-weight: 700;
`

export const Sort = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div`
  padding: 0.75rem 3.125rem;
  background-color: var(--color-green1);
  margin-bottom: 0.938rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ItemLeft = styled.div`
  display: flex;
  align-items: center;
`

export const Number = styled.div`
  width: 5rem;
`
export const User = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-color: var(--color-gray1);
  border-radius: 50%;
  margin-right: 1.25rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Points = styled.div``

export const SortElement = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: var(--color-green2);
  }
`

export const SortElementIcon = styled.div((props: { dir?: string }) => {
  return `
      margin-left: 0.625rem;
      ${props.dir === 'DESC' && 'transform: rotate(180deg);'}
    `
})
