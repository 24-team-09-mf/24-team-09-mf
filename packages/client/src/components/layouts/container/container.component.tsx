import { Wrapper } from "@/components/layouts/container/container.styles"
import { IContainerProps } from "@/components/layouts/container/container.types"

const Container: React.FC<IContainerProps> = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container
