import type { Meta, StoryObj } from '@storybook/react'
import { ProductWidget } from '@/components/product-widget'
import { WidgetProvider } from '@/contexts/widget-context'

const meta: Meta<typeof ProductWidget> = {
  title: 'Components/ProductWidget',
  component: ProductWidget,
  decorators: [
    (Story) => (
      <WidgetProvider>
        <Story />
      </WidgetProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ProductWidget>

export const Default: Story = {
  args: {
    widget: {
      id: 1,
      type: 'carbon',
      amount: 2,
      action: 'offsets',
      selectedColor: 'green',
      active: false,
      linked: false,
    },
  },
}

export const Plastic: Story = {
  args: {
    widget: {
      id: 2,
      type: 'plastic',
      amount: 10,
      action: 'collects',
      selectedColor: 'blue',
      active: false,
      linked: false,
    },
  },
}

export const Trees: Story = {
  args: {
    widget: {
      id: 3,
      type: 'trees',
      amount: 5,
      action: 'plants',
      selectedColor: 'beige',
      active: false,
      linked: false,
    },
  },
}
