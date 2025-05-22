import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhishek Madhura Portfolio",
  description: "Personal portfolio of Abhishek, a Computer Science student ",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
       
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import LoaderOne from "@/components/ui/loader-one"
