import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"
import type React from "react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Генератор данных",
  description: "Генераторы случайных значений и валидаторы данных",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen bg-background flex-col">
            <div className="flex flex-1">
              <MainNav />
              <div className="flex-1">
                <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    
                  <div className="container flex h-14 items-center justify-end">
                    <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
                      Рандомс
                    </Link>
                    <ThemeToggle />
                  </div>
                </header>
                <main className="container py-6">{children}</main>
              </div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'