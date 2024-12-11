'use client'

import { ColorOption } from '@/lib/types'
import { handleColorFormats } from '@/lib/utils'

interface ColorPickerProps {
  options: ColorOption[]
  selectedColor: string
  onColorChange: (color: string) => void
}

export function ColorPicker({ options, selectedColor, onColorChange }: ColorPickerProps) {
  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onColorChange(option.id)}
          style={{
            backgroundColor: option.value,
          }}
          className={`
          w-4 h-4 border border-gray-200
          transition-all duration-200
          hover:opacity-80
          focus:outline-none focus:ring-2 focus:ring-gray-400
          ${handleColorFormats(selectedColor) === option.value ? 'ring-2 ring-gray-400' : ''}
        `}
          aria-label={`Select ${option.id} color`}
        />
      ))}
    </div>
  )
}
