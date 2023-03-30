import styled from 'styled-components'
import { Button } from '@/components'
import { lighten, rgba } from 'polished'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
`
export const Title = styled.h1`
  font-weight: 400;
  font-size: 110px;
  line-height: 120px;
  color: #97B955;
  text-align: right;
`;
export const BtnStart = styled(Button)`
  font-size: 32px;
  background-color: #1E7063;
  border-radius: 8px;
  padding: 22px;
  width: fit-content;

  &:hover {
    background-color: ${() => lighten(0.1, '#1E7063')};
  }
  &:active {
    box-shadow: -0.25rem -0.1875rem 0.25rem transparent,
    0.125rem 0.25rem 0.6875rem ${() => rgba('#1E7063', 0.2)};
  }
  &:focus-visible {
    box-shadow: -0.25rem -0.1875rem 0.25rem transparent,
    0.125rem 0.25rem 0.6875rem ${() => rgba('#1E7063', 0.2)};
  }
`
