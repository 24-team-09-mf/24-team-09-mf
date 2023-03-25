import styled from 'styled-components'
import { Button } from '../../atoms'
import { Input } from '../../molecules'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24.375rem;
`

export const InputComponent = styled(Input)`
  margin-bottom: 1rem;
`

export const BtnSave = styled(Button)`
  margin-block: 0.625rem;
`

