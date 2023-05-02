import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useCallback } from 'react'
import {
  changeScore,
  changeLives,
  resetLives,
  resetScore,
} from '@/store/game/gameSlice'

export const useGameStore = () => {
  const dispatch = useAppDispatch()

  const lives = useAppSelector(state => state.game.lives)
  const score = useAppSelector(state => state.game.score)

  const resetGame = useCallback(() => {
    dispatch(resetScore())
    dispatch(resetLives())
  }, [dispatch])

  const handlerChangeScore = useCallback(
    (value: number) => dispatch(changeScore(value)),
    [dispatch]
  )

  const handlerChangeLives = useCallback(
    (value: number) => {
      dispatch(changeLives(value))
    },
    [dispatch, lives]
  )

  return {
    lives,
    score,
    resetGame,
    changeLives: handlerChangeLives,
    changeScore: handlerChangeScore,
  }
}
