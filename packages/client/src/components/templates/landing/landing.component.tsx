import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, userStore } from '@/store'
import { oAuthCodePost } from '@/store/user/oauth/actions'
import { JungleHeader } from '@/components/molecules'
import Container from '@/components/layouts/container/container.component'

import {
  Wrapper,
  Description,
  Section,
  GameGif,
  GameProcess,
  SignUpLink,
} from './landing.styles'

import Game from '@/assets/images/landing/game.gif'

export const Landing = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { user } = userStore()

  useEffect(() => {
    const oauthCode = searchParams.get('code')
    if (oauthCode && !user?.id) {
      dispatch(oAuthCodePost(oauthCode))
      setSearchParams('')
    }
  }, [dispatch, setSearchParams, user?.id, searchParams])

  return (
    <Container>
      <Wrapper>
        <JungleHeader title="Джунглевая опасность" align="center" />
        <Section>
          <JungleHeader title="Описание игры" variant="xs" align="left" />
          {/* TODO доделать Typography */}
          <Description>
            В игре представлен захватывающий мир джунглей, который поделен на
            несколько уровней, каждый из которых является отдельным фрагментом
            карты. Главным героем игры является бесстрашный исследователь, чья
            задача - преодолевать препятствия на пути, собирать награды и
            достигать цели. В ходе игры игроку предстоит прыгать по блокам,
            взаимодействовать с окружающим миром, и бороться с опасными
            животными. У героя есть начальный запас здоровья, который может быть
            уменьшен во время взаимодействия с различными преградами и
            опасностями в джунглях. Игроку предстоит преодолеть разнообразные
            типы препятствий, каждое из которых представляет уникальный вызов, и
            может нанести урон герою.
          </Description>
        </Section>
        <Section>
          <JungleHeader title="Игровой процесс" variant="xs" align="left" />
          <GameProcess>
            <GameGif src={Game} alt="Игровой процесс" />
            <div>
              {/* TODO доделать Typography */}
              <Description>
                Игрок управляет персонажем используя клавиши на клавиатуре.
                Герой может прыгать, бегать и собирать награды. По мере
                повышения сложности, на уровнях будут появляться новые
                препятствия, которые необходимо преодолевать для того, чтобы
                получить больше наград. Если же герой падает в пропасть или
                умирает от урона ловушек – игра заканчивается.
              </Description>
              <SignUpLink to="/signup">РЕГИСТРАЦИЯ</SignUpLink>
            </div>
          </GameProcess>
        </Section>
        <Section>
          <JungleHeader
            title="Условия игры и подсчет очков"
            variant="xs"
            align="left"
          />
          {/* TODO доделать Typography */}
          <Description>
            Успешным прохождением уровня считается, когда герой добирается до
            флажка на карте, обозначающим «финиш». За сбор наград игрок получает
            очки. Если герой умирает, очки обнуляются. Чем быстрее игрок
            проходит уровень, тем больше очков он получает.
          </Description>
        </Section>
      </Wrapper>
    </Container>
  )
}
