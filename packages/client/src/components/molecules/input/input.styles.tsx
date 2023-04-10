// lib
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputComponent = styled.input<{
  isError?: boolean
  disabled?: boolean
}>`
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  outline: none;
  border: ${({ isError }) =>
    isError ? '1px solid #c22020' : '1px solid #182c3b'};
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  padding: 11px 13px;
  color: #333333;

  &::placeholder {
    color: rgba(0, 0, 0, 0.51);
  }

  &:focus {
    border-color: #333333;
  }
`

export const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c22020;
  margin-block-start: 6px;
  font-size: 12px;
  line-height: 16px;

  svg {
    flex-shrink: 0;
  }
`
