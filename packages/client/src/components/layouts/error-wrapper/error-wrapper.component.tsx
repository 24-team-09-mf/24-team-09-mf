import React from 'react'
import { withRouter } from "@/components/HOCs/withRouter"
import { NavigateFunction } from 'react-router/dist/lib/hooks'

type Props = {
  navigate?: NavigateFunction
}

class ErrorWrapperComponent extends React.Component<React.PropsWithChildren<Props>> {
  componentDidCatch() {
    if (this.props.navigate)
      this.props.navigate('/500')
  }

  render() {
    return this.props.children
  }
}

export const ErrorWrapper = withRouter(ErrorWrapperComponent)
