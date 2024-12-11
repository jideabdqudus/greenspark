'use client'

import type { ProductWidget } from '@/lib/types'
import { createContext, useContext, useState, useEffect } from 'react'

interface WidgetContextType {
  activeWidgetId: number | null
  setActiveWidget: (id: number | null) => void
  updateWidget: (id: number, updates: Partial<ProductWidget>) => void
  widgets: ProductWidget[]
  isLoading: boolean
  error: string | null
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined)

export function WidgetProvider({ children }: { children: React.ReactNode }) {
  const [activeWidgetId, setActiveWidgetId] = useState<number | null>(null)
  const [widgets, setWidgets] = useState<ProductWidget[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchWidgets = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets')
      if (!response.ok) throw new Error('Failed to fetch widgets')
      const data = await response.json()
      setWidgets(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWidgets()
  }, [])

  const setActiveWidget = (id: number | null) => {
    setActiveWidgetId(id)
    setWidgets(
      widgets.map((widget) => ({
        ...widget,
        active: widget.id === id,
      })),
    )
  }

  const updateWidget = (id: number, updates: Partial<ProductWidget>) => {
    setWidgets(widgets.map((widget) => (widget.id === id ? { ...widget, ...updates } : widget)))
  }

  return (
    <WidgetContext.Provider value={{ activeWidgetId, setActiveWidget, updateWidget, widgets, isLoading, error }}>
      {children}
    </WidgetContext.Provider>
  )
}

export function useWidget() {
  const context = useContext(WidgetContext)
  if (context === undefined) {
    throw new Error('useWidget must be used within a WidgetProvider')
  }
  return context
}
