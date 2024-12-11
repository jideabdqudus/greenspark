export type WidgetType = 'carbon' | 'trees' | 'plastic'

export interface ProductWidget {
  id: number
  type: WidgetType
  amount: number
  action: string
  selectedColor: ColorOption['id']
  active: boolean
  linked: boolean
}

export interface ColorOption {
  id: string
  value: string
  className?: string
}
