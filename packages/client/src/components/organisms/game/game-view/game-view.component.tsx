import { FC, useEffect, useRef, useState } from 'react'
import { GameModel, GameViewProps } from '@/components/organisms/game/game-view/game-view.types'
import { HEIGHT_VIEW, WIDTH_VIEW } from '@/components/organisms/game/game.constants'
import { useGameBackground } from '@/components/organisms/game/game-view/logics/useGameBackground'

export const GameView: FC<GameViewProps> = ({ isStartedGame }) =>  {
  const [gameModel, setGameModel] = useState<GameModel>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = WIDTH_VIEW;
      canvasRef.current.height = HEIGHT_VIEW;

      const model = canvasRef.current.getContext('2d');

      setGameModel(model);
    }
  }, [canvasRef.current])

  useGameBackground({ gameModel, isStartedGame });

  return (
    <canvas ref={canvasRef} />
  )
}
