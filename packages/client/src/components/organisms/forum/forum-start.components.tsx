// import dateParse from '@/utils/dateParse'

import {
  CatalogBlock,
  CatalogRowContent,
  CatalogRowContentTitle,
  CatalogRowThreadsCount,
  CatalogRowMessage,
  // CatalogRowMessageDate,
  CatalogRowMessageLink,
  CatalogRowMessageUser,
} from '@/components/templates/forum/forum.styles'

import { ForumLastTopicProps, ForumStartProps } from './forum-types'

const ForumStartElement = (el: ForumStartProps) => {
  const { id, title, description, topicsCount, topics } = el

  const lastTopic = topics[0] as ForumLastTopicProps

  return (
    <CatalogBlock>
      <CatalogRowContent>
        <CatalogRowContentTitle to={`/forum/${id}`}>
          {title}
        </CatalogRowContentTitle>
        <p>{description}</p>
      </CatalogRowContent>
      <CatalogRowThreadsCount>{topicsCount}</CatalogRowThreadsCount>
      <CatalogRowMessage>
        <div>
          {/* <CatalogRowMessageDate> */}
          {/* {dateParse(lastTopic.date)} */}
          {/* </CatalogRowMessageDate> */}
          <CatalogRowMessageLink to={`/forum/${id}/${lastTopic.id}`}>
            {lastTopic.title}
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
