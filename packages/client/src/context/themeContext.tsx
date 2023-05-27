// react
import { useEffect, useState, createContext, useCallback } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const DEFAULT_THEME = Theme.LIGHT

type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || DEFAULT_THEME
  )

  const toggleTheme = useCallback(async () => {
    const ThemeValue = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(ThemeValue)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
