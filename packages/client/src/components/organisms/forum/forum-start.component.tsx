import {
  CatalogBlock,
  CatalogRow1,
  CatalogRow1Title,
  CatalogRow2,
  CatalogRowMessage,
  CatalogRowMessageDate,
  CatalogRowMessageLink,
  CatalogRowMessageUser,
} from '@/components/templates/forum/forum.styles'
import React from 'react'
import { forumStartProps } from '@/components/organisms/forum/types'
import dateParse from '@/components/utils/date-parse'

const ForumStartElement = (el: forumStartProps) => {
  return (
    <CatalogBlock>
      <CatalogRow1>
        <CatalogRow1Title to={`/forum/${el.id}`}>{el.title}</CatalogRow1Title>
        <p>{el.text}</p>
      </CatalogRow1>
      <CatalogRow2>{el.topicsCount}</CatalogRow2>
      <CatalogRowMessage>
        <div>
          <CatalogRowMessageDate>
            {dateParse(el.lastTopic.date)}
          </CatalogRowMessageDate>
          <CatalogRowMessageLink to={`/forum/${el.id}/${el.lastTopic.id}`}>
            {el.lastTopic.title}
          </CatalogRowMessageLink>
          <CatalogRowMessageUser>
            @{el.lastTopic.userName}
          </CatalogRowMessageUser>
        </div>
      </CatalogRowMessage>
    </CatalogBlock>
  )
}

export const ForumStartTopics = ({ data }: { data: forumStartProps[] }) => {
  return (
    <>
      {data.map(el => (
        <ForumStartElement key={el.id} {...el} />
      ))}
    </>
  )
}
