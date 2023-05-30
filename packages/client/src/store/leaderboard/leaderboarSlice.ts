import { createSlice } from '@reduxjs/toolkit'
import { LeaderboardElementProps } from '@/components/organisms/leaderboard/leaderboard-types'
import { getLeaderboardList } from '../../api/leaderboard'

export interface LeaderboardState {
  data: LeaderboardElementProps[]
  isLoading: boolean
  error: string | null
}

const initialState: LeaderboardState = {
  data: [],
  isLoading: false,
  error: null,
}

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getLeaderboardList.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getLeaderboardList.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(getLeaderboardList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default leaderboardSlice.reducer
