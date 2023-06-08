import React, { useContext, useEffect, useState, createContext } from 'react'
import { addUserTheme, getUserTheme } from '@/api/userTheme'
import { userStore } from '@/store'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const DEFAULT_THEME = Theme.LIGHT

type ThemeContextType = {
  currentTheme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode
  cookies?: string
}> = ({ children }) => {
  const localTheme = localStorage.getItem('app-theme') as Theme

  // const { user } = userStore()

  const [currentTheme, setCurrentTheme] = useState<Theme>(
    localTheme || DEFAULT_THEME
  )

  const toggleTheme = async () => {
    const theme = currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setCurrentTheme(theme)
    // if (user) await addUserTheme({ title: theme })
  }

  // useEffect(() => {
  //   ;(async () => {
  //     if (!localTheme && user) {
  //       const themeNameFromDB = await getUserTheme()
  //       const themeNameFromDBIsValid =
  //         typeof themeNameFromDB === 'string' &&
  //         themeNameFromDB !== currentTheme &&
  //         Object.values(Theme).includes(themeNameFromDB)

  //       if (themeNameFromDBIsValid) {
  //         console.log('устанавливаю тему из базы', themeNameFromDB)
  //         setCurrentTheme(themeNameFromDB)
  //       }
  //     }
  //   })()
  // }, [])

  useEffect(() => {
    localStorage.setItem('app-theme', currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('Контекст темы недоступен')
  }

  return context
}
