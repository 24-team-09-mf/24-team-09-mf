import { Navigate, useLocation } from 'react-router-dom'
import { userStore } from '@/store'

type Props = {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const location = useLocation()
  const { user, isLoading } = userStore()

  console.log(location)

  const fromUrl = `${location.pathname}${location.search}`

  if (isLoading) return null

  if (!user?.login) {
    return <Navigate to={`/signin?fromUrl=${fromUrl}`} />
  }

  return <>{children}</>
}

export default ProtectedRoute
