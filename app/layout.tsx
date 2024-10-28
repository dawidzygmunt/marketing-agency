import type { Metadata } from "next"
import "../styles/globals.css"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"
import { Nunito_Sans as FontNunito } from "next/font/google"

const fontNunito = FontNunito({
  subsets: ["latin"],
  variable: "--font-sans-latin",
})

export const metadata: Metadata = {
  title: "Marketing Agency",
  description: "Example marketing agency website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-white",
          fontNunito.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
