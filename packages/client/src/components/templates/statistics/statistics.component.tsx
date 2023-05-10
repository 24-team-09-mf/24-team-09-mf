import { Section } from './statistics.styles'
import { Leaderboard } from '@/components'
import Container from '@/components/layouts/container/container.component'
import { H1 } from '@/global-styles'
import { useEffect } from 'react';
import { getLeaderboardList } from '@/api/leaderboard'
import { useAppDispatch, useAppSelector } from '@/store'

export const Statistics = () => {

  const leaderboardData = useAppSelector((state) => state.leaderboard.data)
  const isLoading = useAppSelector((state) => state.leaderboard.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLeaderboardList(10))
  }, [dispatch])

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
