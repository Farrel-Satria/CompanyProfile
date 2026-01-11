import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'NexaTech Solutions - Empowering Businesses Through Smart Digital Solutions',
  description: 'NexaTech Solutions provides cutting-edge IT services including web development, IT support, system integration, and digital transformation consulting. Transform your business with our innovative technology solutions.',
  keywords: 'IT services, web development, IT support, system integration, digital transformation, technology consulting',
  openGraph: {
    title: 'NexaTech Solutions - Empowering Businesses Through Smart Digital Solutions',
    description: 'Leading IT services company providing innovative technology solutions for businesses.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
