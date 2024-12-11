import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from '@/components/color-picker'
import { colorOptions } from '@/lib/utils'

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ColorPicker>

export const Default: Story = {
  args: {
    options: colorOptions,
    selectedColor: 'green',
    onColorChange: (color) => console.log('Color changed:', color),
  },
}
