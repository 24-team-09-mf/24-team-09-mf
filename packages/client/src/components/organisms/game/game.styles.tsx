import styled from 'styled-components'
import { HEIGHT_VIEW, WIDTH_VIEW } from '@/components/organisms/game/game.constants'
import { Button } from '@/components'

export const MainView = styled.div`
  position: relative;
  width: ${WIDTH_VIEW}px;
  height: ${HEIGHT_VIEW}px;
  margin: 0 auto;
`;

export const Content = styled.div`
  font-family: '04B03';
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 115px;
`
export const BtnText = styled(Button)`
  font-size: 32px;
  padding: 0;
  width: fit-content;

  &:hover {
    text-decoration: none;
  }
`
