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
  // ForumEmojiElement,
} from '@/components/templates/forum/forum.styles'
import IconEmojiAdd from '@/assets/icons/emojiAdd.svg'
import { useState } from 'react'
import dateParse from '@/utils/dateParse'
import avatarDefault from '@/assets/images/avatarDefault.png'
import { EMOJI, ForumEditor } from '@/components'

const ForumPost = (el: ForumPostProps) => {
  const { user, createdAt, message } = el

  const [replyOpen, setReplyOpen] = useState(false)
  const [emojiAdd, setEmojiAdd] = useState('none')

  const onReplyHandler = () => setReplyOpen(prev => !prev)
  const onsetEmojiHandler = () =>
    setEmojiAdd(prev => (prev === 'none' ? 'block' : 'none'))

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
              {/* TODO сделать emoji */}
              {/* {emoji &&
                emoji.map(el => (
                  <ForumEmojiElement key={el.name}>
                    <img src={EMOJI[el.name]} alt={el.name} />
                    <span>{el.usersId.length}</span>
                  </ForumEmojiElement>
                ))} */}
              <ForumEmojiAddBtn onClick={onsetEmojiHandler}>
                <ForumEmojiAddBlock display={emojiAdd}>
                  {Object.keys(EMOJI).map(el => (
                    <ForumEmojiAddElement key={el}>
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
  return (
    <div>
      {data.map(el => (
        <ForumPost key={el.id} {...el} />
      ))}
    </div>
  )
}
