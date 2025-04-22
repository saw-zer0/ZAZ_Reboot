import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sworna Travels - Explore Nepal, Bhutan and Tibet",
  description:
    "Experience the beauty of the Himalayas with Sworna Travels. We offer trekking, tours, mountain flights, and air ticketing services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="container mx-auto px-4 border-b relative z-50">
              <MainNav />
            </header>
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
