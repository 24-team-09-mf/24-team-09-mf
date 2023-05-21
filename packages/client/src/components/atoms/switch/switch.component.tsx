// react
import { useState, useContext } from 'react'

// icons
import sun from '@/assets/icons/sun.svg'
import night from '@/assets/icons/night.svg'

import { ThemeContext } from '@/context/themeContext'

// styles
import * as S from './switch.styles'

export const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const checkedValue = theme !== 'light' ? true : false
  const [checked, setChecked] = useState(checkedValue)
  const handleSwitchToggle = () => {
    setChecked(prev => !prev)
    toggleTheme()
  }

  return (
    <S.Wrapper>
      <S.ToggleSwitch>
        <S.Checkbox
          type="checkbox"
          name="themeToggleSwitch"
          id="themeToggleSwitch"
          checked={checked}
          onChange={handleSwitchToggle}
        />
        <S.Label htmlFor="themeToggleSwitch">
          <S.Inner />
          <S.Switch>
            {theme !== 'light' ? (
              <S.Icon>
                <img src={night} />
              </S.Icon>
            ) : (
              <S.Icon>
                <img src={sun} />
              </S.Icon>
            )}
          </S.Switch>
        </S.Label>
      </S.ToggleSwitch>
    </S.Wrapper>
  )
}
