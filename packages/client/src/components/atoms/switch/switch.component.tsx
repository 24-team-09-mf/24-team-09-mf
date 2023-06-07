// react
import { useState } from 'react'

// icons
import sun from '@/assets/icons/sun.svg'
import night from '@/assets/icons/night.svg'

import { useThemeContext } from '../../../context/themeContext'

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
  const { toggleTheme, currentTheme } = useThemeContext()
  const checkedValue = currentTheme !== 'light' ? true : false
  const [checked, setChecked] = useState(checkedValue)
  const handleSwitchToggle = () => {
    setChecked(prev => !prev)
    toggleTheme && toggleTheme()
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
            {currentTheme !== 'light' ? (
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
