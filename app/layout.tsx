import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'
import {Prosto_One} from 'next/font/google';
import './globals.css'

const prosto = Prosto_One({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prosto.className}>
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  )
}
