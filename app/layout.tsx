import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { FloatingMenuButton } from "@/components/floating-menu-button"
import { MobileBottomMenu } from "@/components/mobile-bottom-menu"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sworna Travels - Your Gateway to Nepal",
  description: "Discover Nepal with Sworna Travels. Expert trekking guides, cultural tours, and adventure packages.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <PageTransition>{children}</PageTransition>
            <SiteFooter />
            <FloatingMenuButton />
            <MobileBottomMenu />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
