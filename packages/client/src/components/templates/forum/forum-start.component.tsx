import {
  CatalogRowLastMessage,
  CatalogRowThreadsCount,
  CatalogTop,
  Wrapper,
} from './forum.styles'
import { ForumStartTopics } from '@/components/organisms/forum'
import { BaseLoader } from '@/components/molecules/loader'

import { useEffect } from 'react'

import Container from '@/components/layouts/container/container.component'

import { forumStore } from '@/store/forumStore'
import { forumGetCategories } from '@/store/forum/actions'
import { useAppDispatch } from '@/store'

import { H1 } from '@/global-styles'

export const Forum = () => {
  const dispatch = useAppDispatch()
  const { categories } = forumStore()

  useEffect(() => {
    dispatch(forumGetCategories())
  }, [])

  return (
    <Container>
      <Wrapper>
        <H1>ФОРУМ</H1>
        <CatalogTop>
          <CatalogRowThreadsCount>Тем</CatalogRowThreadsCount>
          <CatalogRowLastMessage>Последнее сообщение</CatalogRowLastMessage>
        </CatalogTop>
        {categories.isLoading ? (
          <BaseLoader />
        ) : (
          <ForumStartTopics data={categories.items} />
        )}
      </Wrapper>
    </Container>
  )
}
