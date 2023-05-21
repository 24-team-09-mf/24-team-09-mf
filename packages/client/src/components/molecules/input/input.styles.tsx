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
  border: 1px solid;
  border-color: ${({ isError }) =>
    isError ? ' #c22020' : 'var(--color-text)'};
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  padding: 11px 13px;
  color: var(--color-text);
  background-color: var(--bg-color);

  &::placeholder {
    color: rgba(var(--color-text-rgb), 0.51);
  }

  &:focus {
    border-color: var(--color-text);
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
