import { Footer, Header } from '@/index'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'K.Kawa Portfolio Page',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'manifest',
      url: '/favicons/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      url: '/favicons/safari-pinned-tab.svg',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
