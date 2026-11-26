import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DENTI CENTER | Clínica odontológica en Barrancabermeja',
  description: 'DENTI CENTER: atención odontológica cercana y profesional en Barrancabermeja, Santander. Para su mejor sonrisa.',
  keywords: ['Clínica odontológica en Barrancabermeja', 'Odontología en Barrancabermeja', 'Servicios odontológicos Barrancabermeja'],
  openGraph: {
    title: 'DENTI CENTER | Para su mejor sonrisa',
    description: 'Atención odontológica cercana y profesional en Barrancabermeja, Santander.',
    locale: 'es_CO',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CO">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
