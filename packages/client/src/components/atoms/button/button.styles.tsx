import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'
import { rgba, lighten } from 'polished'

const shared = css<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5625rem;
  text-align: center;
  transition: 0.3s ease-in-out;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
  outline: none;

  border-radius: 0.3125rem;
  width: 10.5rem;
  height: 2.4375rem;
`

const outlined = css<ButtonProps>`
  ${shared};
  color: ${({ color }) => color};
  background-color: transparent;
  border: 0.0625rem solid ${({ color }) => rgba(color, 0.5)};
  box-shadow: 0rem 0.25rem 0.3125rem rgba(0, 0, 0, 0.1);
  &:hover {
    border: 0.0625rem solid ${({ color }) => rgba(color, 1)};
  }
  &:active {
    background: ${({ color }) => rgba(color, 0.05)};
    border: 0.0625rem solid ${({ color }) => rgba(color, 1)};
  }
  &:focus-visible {
    background: ${({ color }) => rgba(color, 0.05)};
    border: 0.0625rem solid ${({ color }) => rgba(color, 1)};
  }
`

const text = css<ButtonProps>`
  ${shared};
  color: ${({ color }) => color};
  background-color: transparent;
  border: none;
  font-size: 12px;
  line-height: 16px;
  padding: 0;
  border-radius: 0;

  &:hover {
    text-decoration: underline;
    color: #579945;
  }
  &:active {
    background: ${({ color }) => rgba(color, 0.05)};
  }
  &:focus-visible {
    background: ${({ color }) => rgba(color, 0.05)};
  }
`

const contained = css<ButtonProps>`
  ${shared};
  color: #ffffff;
  border: 0.0625rem solid transparent;
  background-color: ${({ color }) => color};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ color }) => lighten(0.1, color)};
  }
  &:active {
    box-shadow: -0.25rem -0.1875rem 0.25rem transparent,
      0.125rem 0.25rem 0.6875rem ${({ color }) => rgba(color, 0.2)};
  }
  &:focus-visible {
    box-shadow: -0.25rem -0.1875rem 0.25rem transparent,
      0.125rem 0.25rem 0.6875rem ${({ color }) => rgba(color, 0.2)};
  }
`

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'contained':
        return contained
      case 'outlined':
        return outlined
      case 'text':
        return text
    }
  }}
`
