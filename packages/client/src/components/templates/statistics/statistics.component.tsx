import { Section } from './statistics.styles'
import { Leaderboard } from '@/components'
import Container from '@/components/layouts/container/container.component'
import { H1 } from '@/global-styles'

import { useEffect, useState } from 'react';
import { getLeaderboardList } from '@/api/leaderboard'
import { LeaderboardElementProps } from '@/components/organisms/leaderboard/leaderboard-types'


export const Statistics = () => {

  const [leaderboardData, setLeaderboardData] = useState<LeaderboardElementProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getLeaderboardList(10).then(response => {
      setLeaderboardData(response)
      setIsLoading(false)
    }).catch(error => {
      console.error(error)
      setIsLoading(false)
    });
  }, []);

  return (
    <Container>
      <Section>
        <H1>СТАТИСТИКА</H1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Leaderboard data={leaderboardData} />
        )}
      </Section>
    </Container>
  )
}
