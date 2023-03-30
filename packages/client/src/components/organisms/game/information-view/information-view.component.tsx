import { FC } from 'react'
import { InformationViewProps } from '@/components/organisms/game/information-view/information-view.types'
import {
  Header,
  Wrapper,
  Content,
  ButtonsBlock,
  Block,
  Button,
} from '@/components/organisms/game/information-view/information-view.styles'
import { BtnText } from '@/components/organisms/game/game.styles'

export const InformationView: FC<InformationViewProps> = ({
  onCloseInformation,
}) => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <BtnText
            as="button"
            type="button"
            color="#fff"
            variant="text"
            disabled={false}
            onClick={onCloseInformation}>
            Close Information
          </BtnText>
        </Header>
        <ButtonsBlock>
          <Button direction="right" tooltip='Jump'>W</Button>
          <Block>
            <Button direction="bottom" tooltip='Go to Left'>A</Button>
            <Button direction="bottom" tooltip='Go to Right'>D</Button>
          </Block>
        </ButtonsBlock>
      </Content>
    </Wrapper>
  )
}
