import type { ProductWidget as ProductWidgetType } from '@/lib/types'
import { handleColorFormats, getWidgetLogo, textColor } from '@/lib/utils'

interface WidgetHeaderProps {
  widget: ProductWidgetType
}

const widgetHeaderFormat = (widget: ProductWidgetType) => {
  switch (widget.type) {
    case 'carbon':
      return (
        <div
          className={'flex flex-col'}
          style={{
            color: textColor(widget.selectedColor),
          }}
        >
          <span className="text-xs">This product {widget.action}</span>
          <span className="text-lg font-bold">
            {widget.amount}kgs of {widget.type}
          </span>
        </div>
      )
    case 'plastic':
      return (
        <div
          className={'flex flex-col'}
          style={{
            color: textColor(widget.selectedColor),
          }}
        >
          <span className="text-xs">This product {widget.action}</span>
          <span className="text-lg font-bold">
            {widget.amount} {widget.type} bottles
          </span>
        </div>
      )
    default:
      return (
        <div
          className={'flex flex-col'}
          style={{
            color: textColor(widget.selectedColor),
          }}
        >
          <span className="text-xs">This product {widget.action}</span>
          <span className="text-lg font-bold">
            {widget.amount} {widget.type}
          </span>
        </div>
      )
  }
}

export function WidgetHeader({ widget }: WidgetHeaderProps) {
  return (
    <div
      className="rounded-lg p-2 flex items-center gap-3 transition-colors duration-200"
      style={{ backgroundColor: handleColorFormats(widget.selectedColor) }}
    >
      <div>
        <img src={getWidgetLogo(widget.selectedColor)} alt="" className="w-10 h-10" />
      </div>
      <div>{widgetHeaderFormat(widget)}</div>
    </div>
  )
}
