import { memo } from 'react'
import {
  Control,
  Item,
  Search,
  ControlTitle,
  Sort,
  Number,
  User,
  ItemLeft,
  Points,
  UserAvatar,
  SortElement,
  SortElementIcon,
  StyledIconWrapper,
} from './leaderboard.styles'
import { H2 } from '@/global-styles'
import { Input } from '@/components/molecules'

import { LeaderboardElementProps } from './leaderboard-types'
import useLeaderboard from './leaderboard.logics'

import avatarDefault from '@/assets/images/avatarDefault.png'

const LeaderboardElement = memo((props: LeaderboardElementProps) => {
  const { position, score, name, avatar } = props
  const avatarSrc = avatar ? avatar : avatarDefault

  return (
    <Item>
      <ItemLeft>
        <Number>{position}</Number>
        <User>
          <UserAvatar>
            <img src={avatarSrc} alt={name} />
          </UserAvatar>
          {name}
        </User>
      </ItemLeft>
      <Points>{score}</Points>
    </Item>
  )
})

export const Leaderboard = ({ data }: { data: LeaderboardElementProps[] }) => {
  const {
    setSearch,
    nameSort,
    setNameSort,
    positionSort,
    setPositionSort,
    sortedData,
    noResults,
  } = useLeaderboard({ data })

  return (
    <>
      <H2>Таблица лидеров</H2>
      <Control>
        <Search>
          <ControlTitle>Поиск:</ControlTitle>
          <Input
            placeholder="Введите имя"
            onChange={event => {
              setSearch((event.target as HTMLInputElement).value)
            }}
          />
        </Search>
        <Sort>
          <ControlTitle>Сортировка:</ControlTitle>
          <SortElement
            onClick={() => setNameSort(nameSort === 'ASC' ? 'DESC' : 'ASC')}>
            По имени
            <SortElementIcon dir={nameSort}>
              <StyledIconWrapper />
            </SortElementIcon>
          </SortElement>
          <SortElement
            onClick={() =>
              setPositionSort(positionSort === 'ASC' ? 'DESC' : 'ASC')
            }>
            По очкам
            <SortElementIcon dir={positionSort}>
              <StyledIconWrapper />
            </SortElementIcon>
          </SortElement>
        </Sort>
      </Control>

      {noResults ? (
        <div>Пользователь не найден</div>
      ) : (
        sortedData.map(el => <LeaderboardElement key={el.name} {...el} />)
      )}
    </>
  )
}
