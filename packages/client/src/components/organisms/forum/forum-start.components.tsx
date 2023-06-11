import dateParse from '@/utils/dateParse'

import {
  CatalogBlock,
  CatalogRowContent,
  CatalogRowContentTitle,
  CatalogRowThreadsCount,
  CatalogRowMessage,
  CatalogRowMessageDate,
  CatalogRowMessageLink,
  CatalogRowMessageUser,
} from '@/components/templates/forum/forum.styles'

import { ForumLastTopicProps, ForumStartProps } from './forum-types'
import sanitizeHtml from 'sanitize-html'

const ForumStartElement = (el: ForumStartProps) => {
  const { id, title, description, topicsCount, topics } = el

  const lastTopic = topics[0] as ForumLastTopicProps

  return (
    <CatalogBlock>
      <CatalogRowContent>
        <CatalogRowContentTitle to={`/forum/${id}`}>
          {sanitizeHtml(title)}
        </CatalogRowContentTitle>
        <p>{sanitizeHtml(description)}</p>
      </CatalogRowContent>
      <CatalogRowThreadsCount>{topicsCount}</CatalogRowThreadsCount>
      <CatalogRowMessage>
        <div>
          <CatalogRowMessageDate>
            {dateParse(lastTopic.posts[0].createdAt)}
          </CatalogRowMessageDate>
          <CatalogRowMessageLink to={`/forum/${id}/${lastTopic.id}`}>
            {sanitizeHtml(lastTopic.title)}
          </CatalogRowMessageLink>
          <CatalogRowMessageUser>@{lastTopic.user.login}</CatalogRowMessageUser>
        </div>
      </CatalogRowMessage>
    </CatalogBlock>
  )
}

export const ForumStartTopics = ({ data }: { data: ForumStartProps[] }) => {
  return (
    <>
      {data.map(el => (
        <ForumStartElement key={el.id} {...el} />
      ))}
    </>
  )
}
