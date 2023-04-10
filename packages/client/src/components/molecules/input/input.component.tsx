// react
import { forwardRef, useState, KeyboardEvent } from 'react'

// svg
import error from '@/assets/icons/error.svg'

// types
import { TextFieldProps } from './input.types'

// styles
import { Wrapper, Error, InputComponent } from './input.styles'

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, errorMessage, isError, type = 'text', ...props }, ref) => {
    const [isCapsLockOn, setIsCapsLockOn] = useState(false)

    const checkCapsLock = (event: KeyboardEvent) => {
      if (event.getModifierState('CapsLock')) {
        setIsCapsLockOn(true)
      } else {
        setIsCapsLockOn(false)
      }
    }

    return (
      <Wrapper className={className}>
        <InputComponent
          isError={isError}
          ref={ref}
          type={type}
          {...props}
          onKeyUp={checkCapsLock}
        />
        {isError && (
          <Error>
            <img src={error} alt="ошибка" />
            {`${errorMessage}`}
          </Error>
        )}
        {isCapsLockOn && (
          <Error>
            <img src={error} alt="ошибка" />
            Включен Caps Lock
          </Error>
        )}
      </Wrapper>
    )
  }
)

Input.displayName = 'Input'
