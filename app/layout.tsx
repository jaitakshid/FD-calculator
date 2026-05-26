import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FD Calculator',
  description: 'Fixed Deposit Calculator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#272727] font-sans text-slate-950">{children}</body>
    </html>
  )
}