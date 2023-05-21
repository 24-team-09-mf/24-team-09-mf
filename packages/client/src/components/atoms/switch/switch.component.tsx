// react
import { useState, useContext } from 'react'

// icons
import sun from '@/assets/icons/sun.svg'
import night from '@/assets/icons/night.svg'

import { ThemeContext } from '../../../context/themeContext'

// styles
import {
  Wrapper,
  ToggleSwitch,
  Checkbox,
  Label,
  Inner,
  SwitchItem,
  Icon,
} from './switch.styles'

export const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const checkedValue = theme !== 'light' ? true : false
  const [checked, setChecked] = useState(checkedValue)
  const handleSwitchToggle = () => {
    setChecked(prev => !prev)
    toggleTheme()
  }

  return (
    <Wrapper>
      <ToggleSwitch>
        <Checkbox
          type="checkbox"
          name="themeToggleSwitch"
          id="themeToggleSwitch"
          checked={checked}
          onChange={handleSwitchToggle}
        />
        <Label htmlFor="themeToggleSwitch">
          <Inner />
          <SwitchItem>
            {theme !== 'light' ? (
              <Icon>
                <img src={night} />
              </Icon>
            ) : (
              <Icon>
                <img src={sun} />
              </Icon>
            )}
          </SwitchItem>
        </Label>
      </ToggleSwitch>
    </Wrapper>
  )
}
