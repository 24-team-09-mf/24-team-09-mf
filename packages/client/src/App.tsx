import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useAppDispatch } from './store'
import { getUser } from '@/store/user/auth/actions'

import { router } from './router/router'

import { GlobalStyle } from './global-styles'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser())
  })

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}
export default App
