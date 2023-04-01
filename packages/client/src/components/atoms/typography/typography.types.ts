import { ReactNode } from 'react'
import { VARIANTS } from './typography.component'

export interface ITypographyProps {
  variant?: keyof typeof VARIANTS
  children: ReactNode
  color?: string
}
