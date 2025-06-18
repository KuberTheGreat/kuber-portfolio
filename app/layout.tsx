import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kuber Portfolio',
  description: 'Created by Kuber',
  generator: 'kuber.dev',
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
