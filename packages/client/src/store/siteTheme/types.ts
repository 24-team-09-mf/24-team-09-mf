import { User } from '@/store/user/types'

interface ThemesProps {
  id: number
  title: string
  themesCount: number
  userThemes: UserThemesProps[]
}

export interface UserThemesProps {
  id: string
  parent_id: string
  user: Partial<User>
}

export interface UserTheme {
  isLoading: boolean
  items: UserThemesProps[]
  error: string
}

export interface Themes {
  isLoading: boolean
  items: ThemesProps[]
  error: string
}

export interface ThemeStore {
  themes: Themes
  userTheme: UserTheme
}
