'use client'

import Link from 'next/link'
import { useState } from 'react'
import { InfoIcon } from 'lucide-react'
import { colorOptions } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { ColorPicker } from '@/components/color-picker'
import { useWidget } from '@/contexts/widget-context'
import { WidgetHeader } from '@/components/widget-header'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { ProductWidget as ProductWidgetType } from '@/lib/types'

interface ProductWidgetProps {
  widget: ProductWidgetType
}

export function ProductWidget({ widget }: ProductWidgetProps) {
  const { updateWidget, setActiveWidget } = useWidget()
  const [openPopover, setOpenPopover] = useState(false)

  const handleMouseEnter = () => {
    setOpenPopover(true)
  }

  const handleMouseLeave = () => {
    setOpenPopover(false)
  }

  const handleColorChange = (color: string) => {
    updateWidget(widget.id, { selectedColor: color })
  }

  const handleActivateChange = (checked: boolean) => {
    if (checked) {
      setActiveWidget(widget.id)
    } else {
      setActiveWidget(null)
    }
  }

  const handleLinkChange = (checked: boolean) => {
    updateWidget(widget.id, { linked: checked })
  }

  return (
    <div className="space-y-4">
      <div>
        <WidgetHeader widget={widget} />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-[#3B755F]">
          <span className="flex items-center gap-1">
            Link to Public Profile
            <Popover open={openPopover} onOpenChange={setOpenPopover}>
              <PopoverTrigger onMouseEnter={handleMouseEnter}>
                <InfoIcon className="w-3 h-3 mb-2" />
              </PopoverTrigger>
              <PopoverContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="flex flex-col gap-2 text-center">
                  <p>
                    This widget links directly to your public profile so that you can easily share your impact with your
                    customers. Turn it off here if you do not want the badge to link to it.
                  </p>
                  <Link
                    href={'https://public.getgreenspark.com/1621406275611123/lenny-leemann/'}
                    target="_blank"
                    className="text-sm text-[#3B755F] no-underline hover:no-underline outline-none focus:outline-none border-none"
                  >
                    View Public Profile
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </span>
          <Checkbox
            checked={widget.linked}
            onCheckedChange={handleLinkChange}
            className="data-[state=checked]:bg-[#3B755F] data-[state=checked]:border-[#3B755F] hover:ring-4 hover:ring-[#AFC6BD] transition-all duration-200 ease-in-out"
          />
        </div>

        <div className="flex items-center justify-between text-sm text-[#3B755F]">
          <span>Badge colour</span>
          <ColorPicker options={colorOptions} selectedColor={widget.selectedColor} onColorChange={handleColorChange} />
        </div>

        <div className="flex items-center justify-between text-sm text-[#3B755F]">
          <span>Activate badge</span>
          <Switch
            checked={widget.active}
            onCheckedChange={handleActivateChange}
            className="data-[state=checked]:bg-[#3B755F] "
          />
        </div>
      </div>
    </div>
  )
}
