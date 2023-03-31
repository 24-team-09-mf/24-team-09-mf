import React from 'react'
import {
  Control,
  H2,
  Item,
  Search,
  ControlTitle,
  Sort,
  Wrapper,
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

const LeaderboardElement = (el: any) => {
  const { position, points, userName, userAvatar } = el

  return (
    <Item>
      <ItemLeft>
        <Number>{position}</Number>
        <User>
          <UserAvatar>
            {userAvatar && <img src={userAvatar} alt={userName} />}
          </UserAvatar>
          {userName}
        </User>
      </ItemLeft>
      <Points>{points}</Points>
    </Item>
  )
}

export const Leaderboard = ({ data }: { data: any }) => {
  return (
    <Wrapper>
      <H2 marginBottom="50px">Таблица лидеров</H2>
      <Control>
        <Search>
          <ControlTitle>Поиск:</ControlTitle>
          <Input
            placeholder="Введите имя"
            onKeyDown={() => console.log('ok')}
          />
        </Search>
        <Sort>
          <ControlTitle>Сортировка:</ControlTitle>
          <SortElement>
            По имени
            <SortElementIcon>
              <img src={IconSort} alt="Сортировать" />
            </SortElementIcon>
          </SortElement>
          <SortElement>
            По очкам
            <SortElementIcon dir="DESC">
              <img src={IconSort} alt="Сортировать" />
            </SortElementIcon>
          </SortElement>
        </Sort>
      </Control>

      <>
        {data.map(el => (
          <LeaderboardElement key={el.id} {...el} />
        ))}
      </>
    </Wrapper>
  )
}
