export type GameViewProps = {
  isStartedGame: boolean
  isEndedGame: boolean
  onGameOver: (outcome: string) => void
}

export type GameModel = CanvasRenderingContext2D | null

export type SrpiteAnimation = {
  [key: string]: {
    frameRate: number
    frameBuffer: number
    imageSrc: string
    image?: HTMLImageElement
  }
}

export type SpriteModel = {
  model: GameModel
  position: {
    x: number
    y: number
  }

  dimensions?: {
    width: number
    height: number
  }

  color?: string
  imageSrc?: string
  frameRate?: number
  frameBuffer?: number

  animations?: SrpiteAnimation
}
