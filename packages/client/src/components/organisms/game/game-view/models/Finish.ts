import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'

export class Finish extends Sprite {
  finished = false
  onGameOver: (outcome: string) => void

  constructor(props: SpriteModel & { onGameOver: (outcome: string) => void }) {
    super(props)
    this.onGameOver = props.onGameOver
  }

  getFinish(callback: () => void) {
    if (!this.finished) {
      callback()
      this.finished = true
      this.onGameOver('win')

    }
  }
}
