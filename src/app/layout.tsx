import './globals.css';
import { Navbar } from "@/components/Navbar";
import { Socials } from '@/components/Socials';
import { ThemeProvider } from "@/context/ThemeProvider";import { JetBrains_Mono, EB_Garamond } from 'next/font/google'

const mono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

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
        <html lang="en" className={`${mono.variable} ${garamond.variable}`} suppressHydrationWarning>
            <body className="bg-background text-text transition-colors">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    <main>{children}</main>
                    <Socials />
                </ThemeProvider>
            </body>
        </html>
    );
}