import { ForumPostProps } from './forum-types'
import {
  FormButtonWrapper,
  FormSeparator,
  FormTextarea,
  ForumPostBlock,
  ForumPostBlockAvatar,
  ForumPostBottom,
  ForumPostContent,
  ForumPostDate,
  ForumPostRate,
  ForumPostRateButton,
  ForumPostRateText,
  ForumPostReplyBtn,
  ForumPostTop,
  ForumPostUserName,
} from '@/components/templates/forum/forum.styles'
import IconRateMinus from '@/assets/icons/rate_minus.svg'
import IconRatePlus from '@/assets/icons/rate_plus.svg'
import { ReactElement, useRef, useState } from 'react'
import useSectionForm from './forum-logic'
import { Button } from '@/components'
import dateParse from '@/utils/dateParse'
import { H2 } from '@/global-styles'
import avatarDefault from '@/assets/images/avatarDefault.png'
import { useParams } from 'react-router-dom'

const ForumPost = (el: ForumPostProps) => {
  const [rate, setRate] = useState(el.rate)
  const { userAvatar, userName, date, text } = el

  const [replyOpen, setReplyOpen] = useState(false)

  return (
    <ForumPostBlock>
      <ForumPostBlockAvatar>
        <img src={userAvatar ? userAvatar : avatarDefault} alt="" />
      </ForumPostBlockAvatar>
      <ForumPostContent>
        <ForumPostTop>
          <ForumPostUserName>{userName}</ForumPostUserName>
          <ForumPostDate>{dateParse(date)}</ForumPostDate>
        </ForumPostTop>
        <p>{text}</p>
        <ForumPostBottom>
          <div>
            <ForumPostReplyBtn onClick={() => setReplyOpen(prev => !prev)}>
              Ответить
            </ForumPostReplyBtn>
          </div>
          <ForumPostRate>
            <ForumPostRateButton onClick={() => setRate(prev => prev - 1)}>
              <img src={IconRateMinus} alt="Не нравится" />
            </ForumPostRateButton>
            <ForumPostRateText>{rate}</ForumPostRateText>
            <ForumPostRateButton onClick={() => setRate(prev => prev + 1)}>
              <img src={IconRatePlus} alt="Нравится" />
            </ForumPostRateButton>
          </ForumPostRate>
        </ForumPostBottom>
        {replyOpen && (
          <ForumPostsForm
            replyMessage={
              <>
                <strong>{userName}</strong>
                <br />
                {text}
              </>
            }
          />
        )}
      </ForumPostContent>
    </ForumPostBlock>
  )
}

export const ForumPosts = ({ data }: { data: ForumPostProps[] }) => {
  return (
    <div>
      {data.map(el => (
        <ForumPost key={el.id} {...el} />
      ))}
    </div>
  )
}

export const ForumPostsForm = ({
  replyMessage,
}: {
  replyMessage?: ReactElement
}) => {
  const { id, postPageId } = useParams()
  const { register, onSubmitHandler, handleSubmit, isValid, setValue } =
    useSectionForm(id!, postPageId)
  const messageRef = useRef(null)
  const messageClear = () => {
    ;(messageRef!.current! as HTMLDivElement).innerHTML = ''
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormSeparator />
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
        ref={messageRef}
        placeholder="Сообщение...">
        {replyMessage && (
          <>
            <blockquote>{replyMessage}</blockquote>
            <br />
            <br />
          </>
        )}
      </FormTextarea>
      <FormButtonWrapper>
        <Button
          as="button"
          type="submit"
          color="#579945"
          variant="contained"
          onClick={() => messageClear()}
          disabled={!isValid}>
          Отправить
        </Button>
      </FormButtonWrapper>
    </form>
  )
}
