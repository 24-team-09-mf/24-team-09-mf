import { VARIANTS } from './jungleHeader.constants'

export interface IJungleHeaderProps {
  title: string
  variant?: keyof typeof VARIANTS
  align?: 'left' | 'center' | 'right'
}
