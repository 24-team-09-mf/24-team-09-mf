import { forumPostProps } from '@/components/organisms/forum/types'
import {
  FormButtonWrapper,
  FormSep,
  FormTextarea,
  ForumPostBlock,
  ForumPostBlockAvatar,
  ForumPostBottom,
  ForumPostContent,
  ForumPostDate,
  ForumPostRate,
  ForumPostRateButton,
  ForumPostRateText,
  ForumPostTop,
  ForumPostUserName,
  H2,
} from '@/components/templates/forum/forum.styles'
import icon_rate_minus from '@/assets/icons/rate_minus.svg'
import icon_rate_plus from '@/assets/icons/rate_plus.svg'
import React, { useEffect, useState } from 'react'
import dateParse from '@/components/utils/date-parse'
import useSectionForm from '@/components/organisms/forum/logic'
import { Button } from '@/components'

const ForumPost = (el: forumPostProps) => {
  const [rate, setRate] = useState(el.rate)

  return (
    <ForumPostBlock>
      <ForumPostBlockAvatar>
        {el.userAvatar && <img src={el.userAvatar} alt="" />}
      </ForumPostBlockAvatar>
      <ForumPostContent>
        <ForumPostTop>
          <ForumPostUserName>{el.userName}</ForumPostUserName>
          <ForumPostDate>{dateParse(el.date)}</ForumPostDate>
        </ForumPostTop>
        <p>{el.text}</p>
        <ForumPostBottom>
          <ForumPostRate>
            <ForumPostRateButton onClick={() => setRate(rate - 1)}>
              <img src={icon_rate_minus} alt="Не нравиться" />
            </ForumPostRateButton>
            <ForumPostRateText>{rate}</ForumPostRateText>
            <ForumPostRateButton onClick={() => setRate(rate + 1)}>
              <img src={icon_rate_plus} alt="Нравиться" />
            </ForumPostRateButton>
          </ForumPostRate>
        </ForumPostBottom>
      </ForumPostContent>
    </ForumPostBlock>
  )
}

export const ForumPosts = ({ data }: { data: forumPostProps[] }) => {
  return (
    <>
      {data.map(el => (
        <ForumPost key={el.id} {...el} />
      ))}
    </>
  )
}

export const ForumPostsForm = ({
  id,
  postPageId,
}: {
  id: string
  postPageId: string
}) => {
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
    setValue('postPageId', postPageId)
  }, [onSubmitHandler])

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormSep />
      <H2 marginBottom="30px">Написать сообщение</H2>
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
