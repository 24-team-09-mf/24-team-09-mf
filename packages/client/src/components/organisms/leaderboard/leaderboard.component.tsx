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

export const Leaderboard = () => {
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
      <Item>
        <ItemLeft>
          <Number>1</Number>
          <User>
            <UserAvatar>
              <img src="" alt="ivanivanov" />
            </UserAvatar>
            ivanivanov
          </User>
        </ItemLeft>
        <Points>23456</Points>
      </Item>
      <Item>
        <ItemLeft>
          <Number>1</Number>
          <User>
            <UserAvatar>
              <img src="" alt="ivanivanov" />
            </UserAvatar>
            ivanivanov
          </User>
        </ItemLeft>
        <Points>23456</Points>
      </Item>
      <Item>
        <ItemLeft>
          <Number>1</Number>
          <User>
            <UserAvatar>
              <img src="" alt="ivanivanov" />
            </UserAvatar>
            ivanivanov
          </User>
        </ItemLeft>
        <Points>23456</Points>
      </Item>
    </Wrapper>
  )
}
