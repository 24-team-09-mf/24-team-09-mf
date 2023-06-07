import { fireEvent, render, screen, act } from '@testing-library/react'

import { FormSignIn } from './form-signin.component'

const handleSubmit = jest.fn()

const setup = () => {
  const utils = render(<FormSignIn />)
  const loginInput = screen.getByTestId('login') as HTMLInputElement
  const passwordInput = screen.getByTestId('password') as HTMLInputElement
  const submitBtn = screen.getByRole('button', { name: /войти/i })

  return {
    loginInput,
    passwordInput,
    submitBtn,
    ...utils,
  }
}

describe('Тестирование страницы /signin', () => {
  it('Проверка наличия полей', async () => {
    const { loginInput, passwordInput, submitBtn } = setup()
    expect(loginInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitBtn).toBeInTheDocument()
  })

  it('Событие отправки формы с пустыми полями', async () => {
    const { loginInput, passwordInput, submitBtn } = setup()
    await act(async () => {
      fireEvent.input(loginInput, {
        target: { value: '' },
      })
      fireEvent.input(passwordInput, {
        target: { value: '' },
      })
    })
    expect(loginInput.value).toBe('')
    expect(passwordInput.value).toBe('')
    expect(submitBtn).toBeDisabled()
    expect(handleSubmit).not.toBeCalled()
  })

  it('Проверка валидации полей', async () => {
    const { loginInput, passwordInput, submitBtn } = setup()

    await act(async () => {
      fireEvent.input(loginInput, {
        target: { value: 'логин' },
      })
      fireEvent.input(passwordInput, {
        target: { value: 'пароль' },
      })
    })

    expect(
      screen.getByText('Может содержать только латинские буквы')
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'Минимум 8 символов, должен включать цифры и латинские буквы. Как минимум одну заглавную букву и цифру'
      )
    ).toBeInTheDocument()

    expect(submitBtn).toBeDisabled()
  })

  it('Проверка успешного кейса', async () => {
    const { loginInput, passwordInput, submitBtn } = setup()
    await act(async () => {
      fireEvent.input(loginInput, {
        target: { value: 'erik' },
      })
      fireEvent.input(passwordInput, {
        target: { value: 'testMypassword1' },
      })
    })
    expect(submitBtn).not.toBeDisabled()
  })
})
