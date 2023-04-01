import styled, { css } from 'styled-components'
import { Content as ContentComponent } from '../game.styles'
import { ButtonProps } from '@/components/organisms/game/information-view/information-view.types'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled(ContentComponent)`
  margin: 0;
  padding-top: 25px;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ButtonsBlock = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button = styled.div<ButtonProps>`
  color: #fff;
  font-size: 110px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    ${({ direction }) => direction === 'right' ?
      css`
        left: 100%;
        top: 0;
        height: 1px;
        width: 50px;
      ` :
      css`
        left: 28px;
        top: 40px;
        height: 50px;
        width: 1px;
      `
    }
    border: 1px solid #fff;
  }

  &:after {
    position: absolute;
    ${({ direction }) => direction === 'right' ?
      css`
        left: calc(100% + 50px);
        top: 0;
        height: 1px;
        width: 50px;
      ` :
      css`
        left: -100px;
        top:105px;
        height: 50px;
        width: 1px;
      `
    }
    width: 300px;
    content: ${({ tooltip }) => `'${tooltip}'`};
    font-size: 50px;
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 130px;
`;
