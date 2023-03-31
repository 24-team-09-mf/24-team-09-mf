import React from 'react'
import { Section, H1 } from './statistics.styles'
import { Leaderboard } from '@/components'

export const Statistics = () => {
  return (
    <Section>
      <H1>СТАТИСТИКА</H1>
      <Leaderboard />
    </Section>
  )
}
