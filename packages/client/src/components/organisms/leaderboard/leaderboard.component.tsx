import { useEffect, useState } from 'react'
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
} from './leaderboard.styles'
import { Input } from '@/components/molecules'
import IconSort from '@/assets/icons/sort.svg'
import { LeaderboardElementProps } from './leaderboard-types'
import mergeSort from '@/utils/mergeSort'
import { H2 } from '@/global-styles'

import avatarDefault from '@/assets/images/avatarDefault.png'

const LeaderboardElement = (props: LeaderboardElementProps) => {
  const { position, points, userName, userAvatar } = props

  return (
    <Item>
      <ItemLeft>
        <Number>{position}</Number>
        <User>
          <UserAvatar>
            <img src={userAvatar ? userAvatar : avatarDefault} alt={userName} />
          </UserAvatar>
          {userName}
        </User>
      </ItemLeft>
      <Points>{points}</Points>
    </Item>
  )
}

export const Leaderboard = ({ data }: { data: LeaderboardElementProps[] }) => {
  const [search, setSearch] = useState('')
  const [nameSort, setNameSort] = useState('ASC')
  const [positionSort, setPositionSort] = useState('DESC')
  const [sortData, setSortData] = useState(data)

  useEffect(() => {
    const s = data.filter(el => el.userName.indexOf(search) !== -1)
    setSortData(mergeSort(s, 'position', 'DESC'))
    setPositionSort('DESC')
  }, [search])

  useEffect(() => {
    setSortData(mergeSort(sortData, 'userName', nameSort))
  }, [nameSort])

  useEffect(() => {
    setSortData(mergeSort(sortData, 'position', positionSort))
  }, [positionSort])

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
              <img src={IconSort} alt="Сортировать" />
            </SortElementIcon>
          </SortElement>
          <SortElement
            onClick={() =>
              setPositionSort(positionSort === 'ASC' ? 'DESC' : 'ASC')
            }>
            По очкам
            <SortElementIcon dir={positionSort}>
              <img src={IconSort} alt="Сортировать" />
            </SortElementIcon>
          </SortElement>
        </Sort>
      </Control>

      {sortData.map(el => (
        <LeaderboardElement key={el.position} {...el} />
      ))}
    </>
  )
}
