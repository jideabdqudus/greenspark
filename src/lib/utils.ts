import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'
import { COLORS } from '@/lib/constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleColorFormats = (color: string) => {
  switch (color) {
    case 'beige':
      return COLORS.BEIGE
    case 'green':
      return COLORS.GREEN
    case 'blue':
      return COLORS.BLUE
    case 'white':
      return COLORS.WHITE
    case 'black':
      return COLORS.BLACK
    default:
      return COLORS.WHITE
  }
}

export const colorOptions = [
  { id: 'blue', value: COLORS.BLUE },
  { id: 'green', value: COLORS.GREEN },
  { id: 'beige', value: COLORS.BEIGE },
  { id: 'white', value: COLORS.WHITE },
  { id: 'black', value: COLORS.BLACK },
]

export const textColor = (selectedColor: string) =>
  selectedColor === 'beige' || selectedColor === 'white' ? COLORS.GREEN : COLORS.WHITE

export const getWidgetLogo = (selectedColor: string): string => {
  return selectedColor === 'beige' || selectedColor === 'white'
    ? '/assets/images/greenspark-green-logo.svg'
    : '/assets/images/greenspark-white-logo.svg'
}
