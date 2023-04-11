export type GameViewProps = {
  isStartedGame: boolean
  isEndedGame: boolean
  onGameOver(): void;
}

export type GameModel = CanvasRenderingContext2D | null

export type SrpiteAnimation = {
  [key: string]: {
    frameRate: number,
    frameBuffer: number,
    imageSrc: string,
    image?: HTMLImageElement,
    dimensions: {
      width: number
      height: number
    }
  }
}

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
  color?: string
  imageSrc?: string
  frameRate?: number

  animations?: SrpiteAnimation
}
