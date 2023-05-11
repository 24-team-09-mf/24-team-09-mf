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
  const [nameSort, setNameSort] = useState('DESC')
  const [positionSort, setPositionSort] = useState('DESC')
  const [sortData, setSortData] = useState(data)
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    let filteredData = data
    if (search !== '') {
      filteredData = data.filter(el => el.name.indexOf(search) !== -1)
      setNoResults(filteredData.length === 0)
    }
    const sortedData = mergeSort(filteredData, 'position', 'DESC')
    setSortData(sortedData)
    setPositionSort('ASC')
  }, [data, search])

  useEffect(() => {
    setSortData(prevSortData => {
      const sortedData = mergeSort(prevSortData, 'name', nameSort)
      return sortedData
    })
  }, [nameSort])

  useEffect(() => {
    setSortData(prevSortData => {
      const sortedData = mergeSort(prevSortData, 'position', positionSort)
      return sortedData
    })
  }, [positionSort])

  const dataWithPositions = data.map((el, index) => ({ ...el, position: index + 1 }))

  const sortedData = sortData.map((el) => {
    const position = dataWithPositions.find((e) => e.name === el.name)?.position
    return { ...el, position }
  })

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

      {noResults ? (
        <div>Пользователь не найден</div>
      ) : (
        sortedData.map((el) => (
          <LeaderboardElement
            key={el.name}
            {...el} />
        ))
      )}
    </>
  )
}
