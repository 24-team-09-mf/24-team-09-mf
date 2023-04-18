import { useAppSelector } from './hooks'

export const gameStore = () => {
  const game = useAppSelector(state => state.game)
  const points = useAppSelector(state => state.game.points)
  return { game, points }
}
