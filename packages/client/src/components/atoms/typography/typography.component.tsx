import { ITypographyProps } from './typography.types'

export const VARIANTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
}

export const Typography: React.FC<ITypographyProps> = ({
  variant,
  color,
  children,
  ...props
}) => {
  const Component = variant ? VARIANTS[variant] : 'p'

  return <Component {...props}>{children}</Component>
}
