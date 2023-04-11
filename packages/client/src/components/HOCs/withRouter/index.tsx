import { useNavigate } from 'react-router-dom'

export function withRouter<Props>(
  Component: React.JSXElementConstructor<Props>
) {
  return (props: Props) => {
    const navigate = useNavigate()

    return <Component navigate={navigate} {...props} />
  }
}
