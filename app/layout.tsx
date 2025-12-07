import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Block And Play - Decentralized Gaming Ecosystem',
  description: 'Block And Play: A decentralized ecosystem for blockchain-based gaming and dApps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
