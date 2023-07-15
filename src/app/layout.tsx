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
      <head>
        {/* <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' /> */}
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
