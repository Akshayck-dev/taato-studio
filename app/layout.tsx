import { Analytics } from '@vercel/analytics/next'
import { Playfair_Display, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ink Collective - Premium Tattoo Studio',
  description: 'World-class tattoo artistry and design. Book your custom tattoo with our award-winning artists.',
  generator: 'v0.app',
  openGraph: {
    title: 'Ink Collective - Premium Tattoo Studio',
    description: 'World-class tattoo artistry and design.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#E53935',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ '--font-sans': inter.style.fontFamily, '--font-serif': playfairDisplay.style.fontFamily } as React.CSSProperties}>
      <body className={`antialiased ${inter.className}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
