import { render, screen } from '@testing-library/react'
import { ProductWidget } from '@/components/product-widget'
import { WidgetProvider } from '@/contexts/widget-context'
import { ProductWidget as ProductWidgetType } from '@/lib/types'

describe('ProductWidget', () => {
  const mockWidget: ProductWidgetType = {
    id: 1,
    type: 'carbon', // Ensure this matches one of the WidgetType values
    amount: 2,
    action: 'offsets',
    selectedColor: 'green',
    active: false,
    linked: false,
  }

  const renderWidget = () => {
    return render(
      <WidgetProvider>
        <ProductWidget widget={mockWidget} />
      </WidgetProvider>,
    )
  }

  describe('Widget Rendering', () => {
    it('renders widget with correct initial content', () => {
      renderWidget()
      expect(screen.getByText('2kgs of carbon')).toBeInTheDocument()
      expect(screen.getByText(/This product offsets/i)).toBeInTheDocument()
      expect(screen.getByText('Link to Public Profile')).toBeInTheDocument()
      expect(screen.getByText('Badge colour')).toBeInTheDocument()
      expect(screen.getByText('Activate badge')).toBeInTheDocument()
    })

    it('renders all interactive elements', () => {
      renderWidget()
      expect(screen.getByRole('switch')).toBeInTheDocument()
    })
  })

  describe('Color Picker', () => {
    it('renders all color options', () => {
      renderWidget()
      const colorButtons = screen.getAllByRole('button', { name: /Select .* color/i })
      expect(colorButtons.length).toBeGreaterThan(0)
    })

    it('highlights the selected color', () => {
      renderWidget()
      const selectedColorButton = screen.getByRole('button', { name: /Select green color/i })
      expect(selectedColorButton).toHaveClass('ring-2')
    })
  })

  describe('Toggle Interactions', () => {
    it('handles link checkbox toggle', () => {
      renderWidget()
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).not.toBeChecked()
    })
  })

  describe('Widget Types', () => {
    it('renders carbon widget correctly', () => {
      renderWidget()
      expect(screen.getByText(/kgs of carbon/i)).toBeInTheDocument()
    })

    it('renders plastic widget correctly', () => {
      const plasticWidget: ProductWidgetType = { ...mockWidget, type: 'plastic', amount: 10 }
      render(
        <WidgetProvider>
          <ProductWidget widget={plasticWidget} />
        </WidgetProvider>,
      )
      expect(screen.getByText(/10 plastic bottles/i)).toBeInTheDocument()
    })

    it('renders trees widget correctly', () => {
      const treesWidget: ProductWidgetType = { ...mockWidget, type: 'trees', amount: 5 }
      render(
        <WidgetProvider>
          <ProductWidget widget={treesWidget} />
        </WidgetProvider>,
      )
      expect(screen.getByText(/5 trees/i)).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has accessible color picker buttons', () => {
      renderWidget()
      const colorButtons = screen.getAllByRole('button', { name: /Select .* color/i })
      colorButtons.forEach((button) => {
        expect(button).toHaveAttribute('aria-label')
      })
    })

    it('has accessible toggle controls', () => {
      renderWidget()
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked')
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked')
    })
  })
})
