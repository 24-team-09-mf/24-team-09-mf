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
import { ForumStartProps } from './forum-types'
import dateParse from '@/utils/dateParse'

const ForumStartElement = (el: ForumStartProps) => {
  const { id, title, text, topicsCount, lastTopic } = el

  return (
    <CatalogBlock>
      <CatalogRowContent>
        <CatalogRowContentTitle to={`/forum/${id}`}>
          {title}
        </CatalogRowContentTitle>
        <p>{text}</p>
      </CatalogRowContent>
      <CatalogRowThreadsCount>{topicsCount}</CatalogRowThreadsCount>
      <CatalogRowMessage>
        <div>
          <CatalogRowMessageDate>
            {dateParse(lastTopic.date)}
          </CatalogRowMessageDate>
          <CatalogRowMessageLink to={`/forum/${id}/${lastTopic.id}`}>
            {lastTopic.title}
          </CatalogRowMessageLink>
          <CatalogRowMessageUser>@{lastTopic.userName}</CatalogRowMessageUser>
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
