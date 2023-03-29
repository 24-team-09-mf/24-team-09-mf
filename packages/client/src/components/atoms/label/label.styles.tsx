import styled from 'styled-components'
import { LabelProps } from './label.types'

export const Label = styled.label<LabelProps>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`
