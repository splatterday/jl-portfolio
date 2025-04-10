import './globals.css';
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-background text-text transition-colors">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}