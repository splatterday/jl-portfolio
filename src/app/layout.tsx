import './globals.css'
import { JetBrains_Mono, EB_Garamond } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Socials } from '@/components/Socials'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-serif',
})

export const metadata = {
  title: 'John Lee Portfolio',
  description: 'Front-End Engineer - UI & Accessibility Specialist',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${mono.variable} ${garamond.variable}`}>
      <body className="bg-background text-text transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Socials />
        </ThemeProvider>
      </body>
    </html>
  )
}
