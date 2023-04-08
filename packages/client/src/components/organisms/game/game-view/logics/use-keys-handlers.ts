import { useCallback, useEffect, useState } from 'react'
import { KEY_A, KEY_D, KEY_W } from '@/components/organisms/game/game.constants'

export const useKeysHandlers = () => {
  const [pressedW, setPressedW] = useState(false)
  const [pressedA, setPressedA] = useState(false)
  const [pressedD, setPressedD] = useState(false)

  const handlerKeyDown = useCallback(({ key }: KeyboardEvent) => {
    if (KEY_A.includes(key)) {
      setPressedA(true);
    }
    if (KEY_D.includes(key)) {
      setPressedD(true);
    }
    if (KEY_W.includes(key)) {
      setPressedW(true)
    }
  }, [])

  const handlerKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (KEY_A.includes(key)) {
        setPressedA(false);
      }
      if (KEY_D.includes(key)) {
        setPressedD(false);
      }
      if (KEY_W.includes(key)) {
        setPressedW(false)
      }
    },
    []
  );


  useEffect(() => {
      window.addEventListener('keydown', handlerKeyDown)
      window.addEventListener('keyup', handlerKeyUp)
      return () => {
        window.removeEventListener('keydown', handlerKeyDown)
        window.removeEventListener('keyup', handlerKeyUp)
      }
  }, [])

  return { pressedA, pressedD, pressedW };
}
