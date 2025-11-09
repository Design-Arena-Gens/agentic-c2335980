import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SGN Airport Fast Track Services - Comparison & Reviews',
  description: 'Compare reputable fast track immigration services at Tan Son Nhat Airport (SGN) in Ho Chi Minh City. Find the best prices and reviews.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
