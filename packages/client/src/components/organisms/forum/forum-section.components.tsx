import {
  CatalogBlock,
  SectionRowContent,
  SectionRowContentTitle,
  SectionRowMessagesCount,
  SectionRowLastMessage,
} from '@/components/templates/forum/forum.styles'
import { ForumSectionProps } from './forum-types'
import dateParse from '@/utils/dateParse'
import { H2 } from '@/global-styles'

export const ForumSectionTitle = ({ title }: { title: string }) => {
  return <H2>{title}</H2>
}

const ForumSectionTopicsElement = (el: ForumSectionProps) => {
  const { parentId, id, title, postCount, lastTopic } = el

  return (
    <CatalogBlock>
      <SectionRowContent to={`/forum/${parentId}/${id}`}>
        <SectionRowContentTitle>{title}</SectionRowContentTitle>
      </SectionRowContent>
      <SectionRowMessagesCount>{postCount}</SectionRowMessagesCount>
      <SectionRowMessagesCount>{lastTopic.userName}</SectionRowMessagesCount>
      <SectionRowLastMessage>{dateParse(lastTopic.date)}</SectionRowLastMessage>
    </CatalogBlock>
  )
}

export const ForumSectionTopics = ({ data }: { data: ForumSectionProps[] }) => {
  return (
    <>
      {data.map(el => (
        <ForumSectionTopicsElement key={el.id} {...el} />
      ))}
    </>
  )
}
