import styled from 'styled-components'

// components
import { Button } from '@/components/atoms'

export const Section = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const Title = styled.h1`
  margin-block-end: 1.5rem;
  font-size: 1.875rem;
  line-height: 2.75rem;
`
export const SignUpBtn = styled(Button)`
  color: var(--color-text);
`
