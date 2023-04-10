import { Container } from '@/components/layouts/header/header.styles'
import { ErrorBlock } from '@/components/molecules/error'

export const ErrorTemplate: React.FC = () => {
  return (
    <Container>
      <ErrorBlock code="500" text="Уже чиним" />
    </Container>
  )
}
