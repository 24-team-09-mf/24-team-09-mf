import { useEffect, useState, memo } from 'react'
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

const LeaderboardElement = memo((props: LeaderboardElementProps) => {
  const { position, score, name, avatar } = props

  return (
    <Item>
      <ItemLeft>
        <Number>{position}</Number>
        <User>
          <UserAvatar>
            <img src={avatar ? avatar : avatarDefault} alt={name} />
          </UserAvatar>
          {name}
        </User>
      </ItemLeft>
      <Points>{score}</Points>
    </Item>
  )
})

export const Leaderboard = ({ data }: { data: LeaderboardElementProps[] }) => {
  const [search, setSearch] = useState('')
  const [nameSort, setNameSort] = useState('ASC')
  const [positionSort, setPositionSort] = useState('DESC')
  const [sortData, setSortData] = useState(data)
  const [scoreSort, setScoreSort] = useState('ASC')

  useEffect(() => {
    const s = data.filter(el => el.name.indexOf(search) !== -1)
    setSortData(mergeSort(s, 'position', 'DESC'))
    setPositionSort('DESC')
  }, [search])

  useEffect(() => {
    setSortData(mergeSort(sortData, 'name', nameSort))
  }, [nameSort])

  useEffect(() => {
    setSortData(mergeSort(sortData, 'position', positionSort))
  }, [positionSort])

  useEffect(() => {
    setSortData(mergeSort(sortData, 'score', scoreSort))
  }, [scoreSort]);

  const sortedData = sortData.map((el, index) => ({ ...el, position: index + 1 }))

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
              setScoreSort(scoreSort === 'ASC' ? 'DESC' : 'ASC')
            }>
            По очкам
            <SortElementIcon dir={positionSort}>
              <img src={IconSort} alt="Сортировать" />
            </SortElementIcon>
          </SortElement>
        </Sort>
      </Control>

      {sortedData.map((el) => (
        <LeaderboardElement
          key={el.name}
          {...el} />
      ))}
    </>
  )
}
