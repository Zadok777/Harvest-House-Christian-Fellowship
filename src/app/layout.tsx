import type { Metadata } from 'next'
import { Playfair_Display, Source_Serif_4, Inter } from 'next/font/google'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hhcf4jesus.org'),
  title: {
    default: 'Harvest House Christian Fellowship',
    template: '%s | Harvest House Christian Fellowship',
  },
  description:
    'A local fellowship in Lewisburg, Pennsylvania. Sunday worship, Bible study, and community food pantry.',
  icons: {
    icon: '/logo-mark.png',
    shortcut: '/logo-mark.png',
    apple: '/logo-mark.png',
  },
  openGraph: {
    title: 'Harvest House Christian Fellowship',
    description:
      'A local fellowship in Lewisburg, Pennsylvania. Sunday worship, Bible study, and community food pantry.',
    url: 'https://hhcf4jesus.org',
    siteName: 'Harvest House Christian Fellowship',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
