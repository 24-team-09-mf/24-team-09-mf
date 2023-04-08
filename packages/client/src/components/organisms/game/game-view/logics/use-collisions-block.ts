import { useMemo } from 'react'
import { GameModel } from '@/components/organisms/game/game-view/game-view.types'
import { parsedCollisions } from '@/components/organisms/game/game-view/data/collisions'
import { CollisionBlock } from '@/components/organisms/game/game-view/models/CollisionBlock'


type Props = {
  gameModel: GameModel;
}
export const useCollisionsBlock = ({ gameModel }: Props) => {
  const collisions = useMemo(() => {
    const result: CollisionBlock[] = [];
   if (gameModel) {
      parsedCollisions.forEach((row, y) => {
       row.forEach((symbol, x) => {
         if (symbol === 306) {
            result.push(new CollisionBlock({
              model: gameModel,
              dimensions: { width: 32, height: 32 },
              position: { x: x * 32, y: y * 32 },
              color: 'blue'
            }))
         }
       })
     })
   }
   return result
  }, [gameModel]);

  return collisions
}
