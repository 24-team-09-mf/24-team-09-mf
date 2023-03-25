// react
import { forwardRef, useState, KeyboardEvent } from 'react'

// svg
import error from '../../../assets/icons/error.svg'

// types
import { TextFieldProps } from './input.types'

// styles
import * as S from './input.styles'

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, errorMessage, isError, type = 'text', ...props },
    ref
  ) => {
    const [isCapsLockOn, setIsCapsLockOn] = useState(false)

    const checkCapsLock = (event: KeyboardEvent) => {
      if (event.getModifierState('CapsLock')) {
        setIsCapsLockOn(true)
      } else {
        setIsCapsLockOn(false)
      }
    }

    return (
      <S.Wrapper className={className}>
        <S.Input
          isError={isError}
          ref={ref}
          type={type}
          {...props}
          onKeyUp={checkCapsLock}
        />
        {isError && (
          <S.Error>
            <img src={error} alt="ошибка" />
            {errorMessage}
          </S.Error>
        )}
        {isCapsLockOn && (
          <S.Error>
            <img src={error} alt="ошибка" />
            Включен Caps Lock
          </S.Error>
        )}
      </S.Wrapper>
    )
  }
)

Input.displayName = 'Input'
