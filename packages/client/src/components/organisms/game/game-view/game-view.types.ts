export type GameViewProps = {
  isStartedGame: boolean
  isEndedGame: boolean
  onGameOver(): void;
}

export type GameModel = CanvasRenderingContext2D | null

export type SpriteModel = {
  model: GameModel
  position: {
    x: number
    y: number
  }
  dimensions: {
    width: number
    height: number
  }
  cropbox: {
    width: number
    height: number
  }
  color?: string
  imageSrc?: string
}
