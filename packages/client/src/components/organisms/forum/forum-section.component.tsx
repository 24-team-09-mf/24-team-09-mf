import React, { useEffect } from 'react'
import {
  CatalogBlock,
  FormSep,
  H2,
  SectionRow1,
  SectionRow1Title,
  SectionRow2,
  SectionRow3,
  FormInput,
  FormTextarea,
  FormButtonWrapper,
} from '@/components/templates/forum/forum.styles'
import dateParse from '@/components/utils/date-parse'
import {
  forumSectionProps,
  forumSectionsProps,
} from '@/components/organisms/forum/types'
import { Button } from '@/components'
import useSectionForm from '@/components/organisms/forum/logic'

export const ForumSectionTitle = ({ title }: { title: string }) => {
  return <H2>{title}</H2>
}

const ForumSectionTopicsElement = (el: forumSectionProps) => {
  return (
    <CatalogBlock>
      <SectionRow1>
        <SectionRow1Title to={`/forum/${el.parentId}/${el.id}`}>
          {el.title}
        </SectionRow1Title>
      </SectionRow1>
      <SectionRow2>{el.postCount}</SectionRow2>
      <SectionRow2>{el.lastTopic.userName}</SectionRow2>
      <SectionRow3>{dateParse(el.lastTopic.date)}</SectionRow3>
    </CatalogBlock>
  )
}

export const ForumSectionTopics = ({ data }: { data: forumSectionProps[] }) => {
  return (
    <>
      {data.map(el => (
        <ForumSectionTopicsElement key={el.id} {...el} />
      ))}
    </>
  )
}

export const ForumSectionForm = ({ id }: { id: string }) => {
  const {
    register,
    onSubmitHandler,
    handleSubmit,
    isValid,
    setValue,
    getValues,
  } = useSectionForm()

  useEffect(() => {
    setValue('id', id)
  }, [onSubmitHandler])

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormSep />
      <H2 marginBottom="30px">Добавить тему</H2>
      <FormInput
        {...register('title', { required: true })}
        placeholder="Заголовок темы"
      />
      <FormTextarea
        {...register('message', { required: true })}
        suppressContentEditableWarning={true}
        onInput={e => {
          setValue('message', e.currentTarget.innerHTML, {
            shouldValidate: true,
          })
        }}
        contentEditable="true"
        placeholder="Сообщение...">
        {getValues('message') == '' && ''}
      </FormTextarea>
      <FormButtonWrapper>
        <Button
          as="button"
          type="submit"
          color="#579945"
          variant="contained"
          disabled={!isValid}>
          Отправить
        </Button>
      </FormButtonWrapper>
    </form>
  )
}
