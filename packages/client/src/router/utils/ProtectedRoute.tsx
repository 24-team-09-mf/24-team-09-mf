import { Navigate } from 'react-router-dom'
import { userStore } from '@/store'

type Props = {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user, isLoading } = userStore()

  const fromUrl = `${window.location.pathname}${window.location.search}`

  if (isLoading) return null

  if (!user?.login) {
    return <Navigate to={`/signin?fromUrl=${fromUrl}`} />
  }

  return <>{children}</>
}

export default ProtectedRoute
