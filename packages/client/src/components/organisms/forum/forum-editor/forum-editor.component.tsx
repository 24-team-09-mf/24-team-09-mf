import useSectionForm from '@/components/organisms/forum/forum-logic'
import { useRef } from 'react'
import {
  FormButtonWrapper,
  FormInput,
  FormSeparator,
  FormTextarea,
  FormTextareaWrapper,
  FormTextareaButtons,
  FormTextareaButton,
} from '@/components/templates/forum/forum.styles'
import { H2 } from '@/global-styles'
import { Button } from '@/components'
import { useParams } from 'react-router-dom'
import { ForumEditorProps } from '@/components/organisms/forum/forum-types'
import IconBold from '@/assets/icons/bold.svg'
import IconItalic from '@/assets/icons/italic.svg'

export const ForumEditor = ({
  title,
  titleInput = null,
  replyMessage,
}: ForumEditorProps) => {
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
      <H2 marginBottom="30px">{title}</H2>

      {titleInput && (
        <FormInput
          {...register('title', { required: true })}
          placeholder={titleInput}
        />
      )}

      <FormTextareaWrapper>
        <FormTextareaButtons>
          {/*TODO Deprecated, но пока замены нет*/}
          <FormTextareaButton onClick={() => document.execCommand('bold')}>
            <img src={IconBold} alt="Жирный" />
          </FormTextareaButton>
          <FormTextareaButton onClick={() => document.execCommand('italic')}>
            <img src={IconItalic} alt="Курсив" />
          </FormTextareaButton>
        </FormTextareaButtons>

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
      </FormTextareaWrapper>

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
