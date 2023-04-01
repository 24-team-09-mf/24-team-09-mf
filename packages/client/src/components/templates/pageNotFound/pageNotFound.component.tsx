import { Container } from '@/components/layouts/header/header.styles'
import { ErrorBlock } from '@/components/molecules/error'

export const PageNotFound: React.FC = () => {
  return (
    <Container>
      <ErrorBlock code="404" text="Не туда попали" />
    </Container>
  )
}
