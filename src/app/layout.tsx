import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Greenspark',
  description: 'Greenspark Assignment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
