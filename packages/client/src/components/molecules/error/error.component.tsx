import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper, Code, Description, BackLink } from './error.styles'

import { IErrorBlockProps } from './error.types'

export const ErrorBlock: React.FC<IErrorBlockProps> = ({ code, text }) => {
  const navigate = useNavigate()

  const onBack = (e: SyntheticEvent) => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <Wrapper>
      <Code>{code}</Code>
      <Description>{text}</Description>
      <BackLink href="#" onClick={onBack}>
        Назад
      </BackLink>
    </Wrapper>
  )
}
