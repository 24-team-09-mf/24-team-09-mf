import { GameModel, GameViewProps } from '@/components/organisms/game/game-view/game-view.types'
import { useCallback, useEffect } from 'react'
import { HEIGHT_VIEW, WIDTH_VIEW } from '@/components/organisms/game/game.constants'

// TODO не знаю куда положить эти типы, по идее их может быть очень много и есть риск запутаться в поиске

type Props = {
  isStartedGame: GameViewProps['isStartedGame'],
  gameModel: GameModel
}
export const useGameBackground = ({ isStartedGame, gameModel }: Props) => {

  useEffect(() => {
    if (gameModel) {
      if (!isStartedGame) {
        drawStartFrame(gameModel);
      } else {
        drawGameFrame(gameModel)
      }

    }
  }, [gameModel, isStartedGame])

  const drawStartFrame = useCallback(
    (gameModel: CanvasRenderingContext2D) => {
      gameModel.fillStyle = '#000';
      gameModel.fillRect(0, 0, WIDTH_VIEW, HEIGHT_VIEW);

      // TODO заменить на модель user с анимацией
      gameModel.fillStyle = 'red';
      gameModel.fillRect(820, 350, 80, 140)
    },
    []
  );

  // TODO заменить на обработчик анимации
  const drawGameFrame = useCallback(
    (gameModel: CanvasRenderingContext2D) => {
      gameModel.fillStyle = '#000';
      gameModel.fillRect(0, 0, WIDTH_VIEW, HEIGHT_VIEW);
    },
    []
  );



  return null;
}
