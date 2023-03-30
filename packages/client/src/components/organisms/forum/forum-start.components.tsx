import {
  CatalogBlock,
  CatalogRowContent,
  CatalogRow1Title,
  CatalogRowThreadsCount,
  CatalogRowMessage,
  CatalogRowMessageDate,
  CatalogRowMessageLink,
  CatalogRowMessageUser,
} from '@/components/templates/forum/forum.styles'
import React from 'react'
import { ForumStartProps } from '@/components/organisms/forum/forum-types'
import dateParse from '@/components/utils/date-parse'

const ForumStartElement = (el: ForumStartProps) => {
  const { id, title, text, topicsCount, lastTopic } = el

  return (
    <CatalogBlock>
      <CatalogRowContent>
        <CatalogRow1Title to={`/forum/${id}`}>{title}</CatalogRow1Title>
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
