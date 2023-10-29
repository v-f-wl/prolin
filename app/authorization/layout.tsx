import '../globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Head from 'next/head'
import { ThemeProvider } from '../components/themeProvider/ThemeProvider'


const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proline - Auth',
  description: 'Auth in Proline App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="icon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
