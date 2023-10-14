import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PocketAgent - CRM Software',
  description: 'Client Relation Management software for the PocketAgent Ecosystem',
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo.jpg",
      href: "/logo.jpg"
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo_dark.jpg",
      href: "/logo_dark.jpg"
    },
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey='jotion-theme'
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
