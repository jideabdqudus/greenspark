'use client'

import { WidgetProvider } from '@/contexts/widget-context'
import { ProductWidget } from '@/components/product-widget'
import { useWidget } from '@/contexts/widget-context'

function WidgetGrid() {
  const { widgets, isLoading, error } = useWidget()

  return (
    <div className="grid gap-12 md:grid-cols-3">
      {isLoading && <div>Loading Widgets...</div>}
      {error && <div>Error: {error}</div>}
      {widgets?.map((widget) => (
        <ProductWidget key={widget.id} widget={widget} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div
        className="mx-auto max-w-4xl space-y-6 bg-[#F9F9F9] p-12 rounded-lg lg:min-h-[419px] lg:min-w-[851px]"
        style={{
          boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.10)',
          filter: 'drop-shadow(0px 4px 12px 0px rgba(0, 0, 0, 0.10)) drop-shadow(0px 4px 12px 0px rgba(0, 0, 0, 0.10))',
        }}
      >
        <h1 className="text-2xl font-bold border-b-2 border-[#B0B0B0] pb-1">Per product widgets</h1>
        <WidgetProvider>
          <WidgetGrid />
        </WidgetProvider>
      </div>
    </main>
  )
}
