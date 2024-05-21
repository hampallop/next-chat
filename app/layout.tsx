import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Beta Chat',
  description: 'An example of chatapp built by Next.js & Supabase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background font-sans antialiased max-h-dvh overflow-hidden',
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
