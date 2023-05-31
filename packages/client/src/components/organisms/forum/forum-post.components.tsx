import { ForumPostProps } from './forum-types'
import {
  ForumPostBlock,
  ForumPostBlockAvatar,
  ForumPostBottom,
  ForumPostContent,
  ForumPostDate,
  ForumEmoji,
  ForumPostRate,
  ForumPostReplyBtn,
  ForumPostText,
  ForumPostTop,
  ForumPostUserName,
  ForumEmojiAddBtn,
  ForumEmojiAddBlock,
  ForumEmojiAddElement,
  ForumEmojiElement,
} from '@/components/templates/forum/forum.styles'
import IconEmojiAdd from '@/assets/icons/emojiAdd.svg'
import { useEffect, useState, memo } from 'react'
import dateParse from '@/utils/dateParse'
import avatarDefault from '@/assets/images/avatarDefault.png'
import { EMOJI, ForumEditor } from '@/components'
import { useParams } from 'react-router-dom'
import { userStore } from '@/store'
import useEmoji from './use-emoji'

const ForumPost = (el: ForumPostProps) => {
  const { id, user, createdAt, message, emojis } = el
  const { emoji_name, postId } = useParams()
  const userId = userStore()

  const [replyOpen, setReplyOpen] = useState(false)
  const [emojiAdd, setEmojiAdd] = useState('none')

  const onReplyHandler = () => setReplyOpen(prev => !prev)
  const onsetEmojiHandler = () =>
    setEmojiAdd(prev => (prev === 'none' ? 'block' : 'none'))

  const { addEmojiHandler } = useEmoji(
    userId,
    emoji_name,
    postId
  )

  const onAddEmojiHandler = async (emojiKey: string) => {
    console.log('Adding emoji:', emojiKey)
    addEmojiHandler({
      postId: id,
      emojiName: emojiKey,
      user: user
    })
  }

  const onDeleteEmojiHandler = (emojiId: string) => {
    // deleteEmojiHandler(emojiId)
  }

  useEffect(() => {
    console.log('Emojis updated:', emojis)
  }, [emojis])

  console.log('Rendering ForumPost:', id);

  return (
    <ForumPostBlock>
      <ForumPostBlockAvatar>
        <img src={user.avatar ? user.avatar : avatarDefault} alt={user.login} />
      </ForumPostBlockAvatar>
      <ForumPostContent>
        <ForumPostTop>
          <ForumPostUserName>{user.login}</ForumPostUserName>
          <ForumPostDate>{dateParse(createdAt)}</ForumPostDate>
        </ForumPostTop>
        <ForumPostText
          dangerouslySetInnerHTML={{ __html: message as string }}
        />
        <ForumPostBottom>
          <div>
            <ForumPostReplyBtn onClick={onReplyHandler}>
              Ответить
            </ForumPostReplyBtn>
          </div>
          <ForumPostRate>
            <ForumEmoji>
              {emojis &&
                emojis.map(el => (
                  <ForumEmojiElement key={el.file.emoji_name} onClick={() => onDeleteEmojiHandler(el.file.emoji_name)}>
                    <img src={EMOJI[el.file.emoji_name]} alt={el.file.emoji_name} />
                    <span>{el.user_id}</span>
                  </ForumEmojiElement>
                ))}
              <ForumEmojiAddBtn onClick={onsetEmojiHandler}>
                <ForumEmojiAddBlock display={emojiAdd}>
                  {Object.keys(EMOJI).map(el => (
                    <ForumEmojiAddElement key={el} onClick={() => onAddEmojiHandler(el)}>
                      <img src={EMOJI[el]} alt={el} />
                    </ForumEmojiAddElement>
                  ))}
                </ForumEmojiAddBlock>
                <img src={IconEmojiAdd} alt="Добавить эмоцию" />
              </ForumEmojiAddBtn>
            </ForumEmoji>
          </ForumPostRate>
        </ForumPostBottom>
        {replyOpen && (
          <ForumEditor
            title="Ответить на сообщение"
            replyMessage={
              <>
                <strong>{user.login}</strong>
                <br />
                <div dangerouslySetInnerHTML={{ __html: message as string }} />
              </>
            }
          />
        )}
      </ForumPostContent>
    </ForumPostBlock>
  )
}

export const ForumPosts = ({ data }: { data: ForumPostProps[] }) => {
  console.log('Rendering ForumPosts');
  return (
    <div>
      {data.map(el => (
        <ForumPost key={el.id} {...el} />
      ))}
    </div>
  )
}
