import { ForumPostProps, ForumEmojis } from './forum-types'
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
import { useState } from 'react'
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
  const [emojiList, setEmojiList] = useState(emojis)

  const onReplyHandler = () => setReplyOpen(prev => !prev)
  const onsetEmojiHandler = () =>
    setEmojiAdd(prev => (prev === 'none' ? 'block' : 'none'))

  const { addEmojiHandler, deleteEmojiHandler } = useEmoji(
    userId,
    emoji_name,
    postId
  )

  const onAddEmojiHandler = async (emojiKey: string) => {
    addEmojiHandler({
      postId: id,
      emojiName: emojiKey,
      user: user
    }).then(res => {
      const check = emojiList.find(
        el => el.user_id === res!.payload.user_id &&
          el.file.emoji_name === emojiKey
      )
      if (!check)
        setEmojiList(prevList => [
          ...prevList,
          {
            id: res!.payload.id,
            user_id: res!.payload.user_id,
            file: { emoji_name: emojiKey }
          }
        ] as ForumEmojis[])
    })
  }

  const onDeleteEmojiHandler = async (emojiKey: string) => {
    try {
      const data: typeof emojiList = []
      await deleteEmojiHandler({
        postId: id,
        emojiName: emojiKey,
        user: user,
      }).then(res => {
        console.log(res)
        for (let i = 0; i < emojiList.length; i++) {
          if (emojiList[i].user_id === res!.payload.user_id &&
            emojiList[i].file.emoji_name === emojiKey) {
            console.log('fdgdfg');
          } else data.push(emojiList[i])
        }
        setEmojiList(data)
      })
    } catch (e) {
      console.log(e)
    }
  }

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
              {emojiList &&
                emojiList.map(el => (
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
  return (
    <div>
      {data.map(el => (
        <ForumPost key={el.id} {...el} />
      ))}
    </div>
  )
}
