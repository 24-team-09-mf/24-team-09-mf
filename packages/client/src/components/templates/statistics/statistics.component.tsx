import React from 'react'
import { Section, H1 } from './statistics.styles'
import { Leaderboard } from '@/components'

export const Statistics = () => {
  //TODO Поменять, демо
  const demoData = [
    {
      position: 1,
      points: 2025,
      userName: 'ivan99',
      userAvatar: null,
    },
    {
      position: 2,
      points: 2025,
      userName: 'ivan1',
      userAvatar: null,
    },
    {
      position: 3,
      points: 1900,
      userName: 'noname',
      userAvatar: null,
    },
    {
      position: 4,
      points: 270,
      userName: 'user0001',
      userAvatar: null,
    },
  ]

  return (
    <Section>
      <H1>СТАТИСТИКА</H1>
      <Leaderboard data={demoData} />
    </Section>
  )
}
