import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const myFont = localFont({
  src: './static-fonts/CenturyGothicPaneuropeanRegular.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JMO arquitectos',
  description: 'despacho de arquitectos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
