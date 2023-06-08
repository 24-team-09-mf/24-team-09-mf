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
import sanitizeHtml from 'sanitize-html'

export const ForumSectionTitle = ({ title }: { title: string }) => {
  return <H2>{title}</H2>
}

const ForumSectionTopicsElement = (el: ForumSectionProps) => {
  const { parent_id, id, title, postsCount, user, posts } = el
  return (
    <CatalogBlock>
      <SectionRowContent to={`/forum/${parent_id}/${id}`}>
        <SectionRowContentTitle>{sanitizeHtml(title)}</SectionRowContentTitle>
      </SectionRowContent>
      <SectionRowMessagesCount>{postsCount}</SectionRowMessagesCount>
      <SectionRowMessagesCount>{user.login}</SectionRowMessagesCount>
      <SectionRowLastMessage>
        {dateParse(posts[0].createdAt)}
      </SectionRowLastMessage>
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
