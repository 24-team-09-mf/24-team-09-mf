import { VARIANTS } from './jungleHeader.contstants'

export interface IJungleHeaderProps {
  title: string
  variant?: keyof typeof VARIANTS
  align?: 'left' | 'center' | 'right'
}
