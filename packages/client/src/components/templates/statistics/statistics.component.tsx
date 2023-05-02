import { Section } from './statistics.styles'
import { Leaderboard } from '@/components'
import Container from '@/components/layouts/container/container.component'
import { H1 } from '@/global-styles'

import { FC, useEffect, useState } from 'react';
import { ILeaderboard, getLeaderboardList } from '@/api/leaderboard'


export const Statistics: FC = () => {

  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {

    getLeaderboardList(10).then(response => {
      console.log(response);
      setLeaderboardData(response);
    }).catch(error => {
      console.error(error);
    });
  }, []);


  // fetchedRows.forEach((item) => {
  //   if (item.avatar) {
  //     item.avatar = `${AvatarUrl}${item.avatar}`;
  //   }
  // });
  // setRows(fetchedRows);

  //   });
  // }, []);


  return (
    <Container>
      <Section>
        <H1>СТАТИСТИКА</H1>
        <Leaderboard data={leaderboardData} />
      </Section>
    </Container>
  )
}
