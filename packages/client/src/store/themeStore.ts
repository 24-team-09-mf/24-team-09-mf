import { useAppSelector } from './hooks'

export const themeStore = () => {
  const themes = useAppSelector(state => state.theme.themes)
  const userTheme = useAppSelector(state => state.theme.userTheme)
  return { themes, userTheme }
}
