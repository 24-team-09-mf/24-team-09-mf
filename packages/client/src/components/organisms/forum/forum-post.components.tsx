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
import { useState, useEffect } from 'react'
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
  const [emojiCounts, setEmojiCounts] = useState<{ [key: string]: number }>({})

  const onReplyHandler = () => setReplyOpen(prev => !prev)
  const onsetEmojiHandler = () =>
    setEmojiAdd(prev => (prev === 'none' ? 'block' : 'none'))

  const { addEmojiHandler, deleteEmojiHandler } = useEmoji(
    userId,
    emoji_name,
    postId
  )

  useEffect(() => {
    const updatedEmojiCounts: { [key: string]: number } = {}
    emojis.forEach(emoji => {
      const key = `${id}_${emoji.file.emoji_name}`
      if (updatedEmojiCounts[key]) {
        updatedEmojiCounts[key]++
      }
      else {
        updatedEmojiCounts[key] = 1
      }
    })
    setEmojiCounts(updatedEmojiCounts)
  }, [emojis, id])

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
      if (!check && res!.payload.success) {
        setEmojiList(prevList => [
          ...prevList,
          {
            id: res!.payload.id,
            user_id: res!.payload.user_id,
            file: { emoji_name: emojiKey }
          }
        ] as ForumEmojis[])
        const key = `${id}_${emojiKey}`
        setEmojiCounts(prevCounts => ({
          ...prevCounts,
          [key]: (prevCounts[key] || 0) + 1
        }))
      }
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
        for (let i = 0; i < emojiList.length; i++) {
          if (emojiList[i].user_id === res!.payload.user_id &&
            emojiList[i].file.emoji_name === emojiKey) {
            const updatedEmojiCounts = { ...emojiCounts }
            const key = `${id}_${emojiKey}`
            if (updatedEmojiCounts[key]) {
              updatedEmojiCounts[key]--
              if (updatedEmojiCounts[key] < 1) {
                delete updatedEmojiCounts[key]
              }
            }
            setEmojiCounts(updatedEmojiCounts)
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
              {Object.entries(emojiCounts).map(([key, count]) => (
                <ForumEmojiElement key={key} onClick={() => onDeleteEmojiHandler(key.split("_")[1])}>
                  <img src={EMOJI[key.split("_")[1]]} alt={key.split("_")[1]} />
                  <span>{count}</span>
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
