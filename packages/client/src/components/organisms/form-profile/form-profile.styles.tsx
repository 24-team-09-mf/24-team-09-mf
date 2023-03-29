import styled from 'styled-components'
import { Button, Label } from '../../atoms'
import { Input, Avatar } from '../../molecules'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
`
export const AvatarComponent = styled(Avatar)`
  margin-bottom: 0.5rem;
`

export const InputComponent = styled(Input)`
  margin-bottom: 1rem;
`
export const AvatarLabel = styled(Label)`
  text-align: center;
  font-weight: 700;
  margin-bottom: 2rem;
`

export const BtnSave = styled(Button)`
  margin-block: 0.625rem;
`
