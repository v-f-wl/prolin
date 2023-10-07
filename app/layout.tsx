import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import LeftMenu from './components/LeftMenu'
import CNotification from './components/notification/CNotification'
import { ThemeProvider } from './components/themeProvider/ThemeProvider'

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proline App',
  description: 'Proline App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <LeftMenu/>
          {children}
          <CNotification/>
        </ThemeProvider>
      </body>
    </html>
  )
}
