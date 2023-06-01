import styled from 'styled-components'

import { Button } from '@/components/atoms'

export const Section = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem auto;
`

export const ChangePassword = styled(Button)`
  color: var(--color-text);
`
