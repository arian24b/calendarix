import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/global.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Calendarix - AI-Powered Calendar",
  description: "Get personalized schedules, from daily tasks to monthly goals, all in one place.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
