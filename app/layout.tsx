import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mini Job Board",
  description: "A simple job board built with Next.js and Neon DB",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="bg-blue-500 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Mini Job Board
            </Link>
            <div className="space-x-4">
              <Link href="/candidate/jobs" className="hover:underline">
                Find Jobs
              </Link>
              <Link href="/company/jobs" className="hover:underline">
                Post Jobs
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-200 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">© 2025 Mini Job Board. All rights reserved.</div>
        </footer>
      </body>
    </html>
  )
}

