import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'WEB Shoili | Digital Art Through Code',
  description:
    'WEB Shoili is a premium digital agency creating art through code. We deliver high-end web development, creative design, and professional business automation.',
  keywords: ['web development', 'digital agency', 'creative design', 'business automation', 'branding'],
}

export const viewport: Viewport = {
  themeColor: '#0a0515',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
