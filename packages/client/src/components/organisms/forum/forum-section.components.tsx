import {
  CatalogBlock,
  SectionRowContent,
  SectionRowContentTitle,
  SectionRowMessagesCount,
  SectionRowLastMessage,
} from '@/components/templates/forum/forum.styles'
import { ForumSectionProps } from './forum-types'
// import dateParse from '@/utils/dateParse'
import { H2 } from '@/global-styles'

export const ForumSectionTitle = ({ title }: { title: string }) => {
  return <H2>{title}</H2>
}

const ForumSectionTopicsElement = (el: ForumSectionProps) => {
  const { parent_id, id, title, postsCount, user } = el

  return (
    <CatalogBlock>
      <SectionRowContent to={`/forum/${parent_id}/${id}`}>
        <SectionRowContentTitle>{title}</SectionRowContentTitle>
      </SectionRowContent>
      <SectionRowMessagesCount>{postsCount}</SectionRowMessagesCount>
      <SectionRowMessagesCount>{user.login}</SectionRowMessagesCount>
      <SectionRowLastMessage>{user.id}</SectionRowLastMessage>
      {/* <SectionRowLastMessage>{dateParse(lastTopic.date)}</SectionRowLastMessage> */}
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
