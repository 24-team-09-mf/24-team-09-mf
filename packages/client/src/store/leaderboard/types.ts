export interface IAddLeaderboard {
  score: number
  name?: string
  avatar?: string
}

export interface IGetLeaderboard {
  ratingFieldName: string
  cursor: number
  limit: number
}
