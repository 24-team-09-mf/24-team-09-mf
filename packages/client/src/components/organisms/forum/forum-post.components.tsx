import { ForumPostProps } from './forum-types'
import {
  ForumPostBlock,
  ForumPostBlockAvatar,
  ForumPostBottom,
  ForumPostContent,
  ForumPostDate,
  ForumEmoji,
  ForumPostRate,
  ForumPostRateButton,
  ForumPostRateText,
  ForumPostReplyBtn,
  ForumPostText,
  ForumPostTop,
  ForumPostUserName,
  ForumEmojiAddBtn,
  ForumEmojiAddBlock,
  ForumEmojiAddElement,
  ForumEmojiElement,
} from '@/components/templates/forum/forum.styles'
import IconRateMinus from '@/assets/icons/rate_minus.svg'
import IconRatePlus from '@/assets/icons/rate_plus.svg'
import IconEmojiAdd from '@/assets/icons/emojiAdd.svg'
import { useState } from 'react'
import dateParse from '@/utils/dateParse'
import avatarDefault from '@/assets/images/avatarDefault.png'
import { EMOJI, ForumEditor } from '@/components'

const ForumPost = (el: ForumPostProps) => {
  const [rate, setRate] = useState(el.rate)
  const { userAvatar, userName, date, text, emoji } = el

  const [replyOpen, setReplyOpen] = useState(false)
  const [emojiAdd, setEmojiAdd] = useState('none')

  return (
    <ForumPostBlock>
      <ForumPostBlockAvatar>
        <img src={userAvatar ? userAvatar : avatarDefault} alt={userName} />
      </ForumPostBlockAvatar>
      <ForumPostContent>
        <ForumPostTop>
          <ForumPostUserName>{userName}</ForumPostUserName>
          <ForumPostDate>{dateParse(date)}</ForumPostDate>
        </ForumPostTop>
        <ForumPostText dangerouslySetInnerHTML={{ __html: text as string }} />
        <ForumPostBottom>
          <div>
            <ForumPostReplyBtn onClick={() => setReplyOpen(prev => !prev)}>
              Ответить
            </ForumPostReplyBtn>
          </div>
          <ForumPostRate>
            <ForumEmoji>
              {emoji &&
                emoji.map(el => (
                  <ForumEmojiElement key={el.name}>
                    <img src={EMOJI[el.name]} alt={el.name} />
                    <span>{el.usersId.length}</span>
                  </ForumEmojiElement>
                ))}
              <ForumEmojiAddBtn
                onClick={() =>
                  setEmojiAdd(prev => (prev === 'none' ? 'block' : 'none'))
                }>
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
          <ForumEditor
            title="Ответить на сообщение"
            replyMessage={
              <>
                <strong>{userName}</strong>
                <br />
                <div dangerouslySetInnerHTML={{ __html: text as string }} />
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
