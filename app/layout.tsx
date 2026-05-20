import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Typie Fast Food Center | Authentic Chinese Fast Food',
  description: 'Experience the best Chinese fast food at Typie Fast Food Center. Noodles, Fried Rice, Manchurian, Shezwan Rice, Soft Drinks & Cool Drinks. Order now!',
  keywords: 'Chinese fast food, noodles, fried rice, manchurian, shezwan rice, restaurant, Typie',
  openGraph: {
    title: 'Typie Fast Food Center',
    description: 'Authentic Chinese Fast Food - Order Now!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
