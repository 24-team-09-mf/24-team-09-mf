import { IStoreServices } from '@/store'
import { IAddLeaderboard, IGetLeaderboard } from '@/store/leaderboard/types'

export class LeaderboardService {
  constructor(private _service: IStoreServices['leaderboard']) {}

  addLeaderboardItem(data: IAddLeaderboard) {
    return this._service.addLeaderboardItem(data)
  }
  getLeaderboardList(data: IGetLeaderboard) {
    return this._service.getLeaderboardList(data)
  }
}
