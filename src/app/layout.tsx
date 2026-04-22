import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from './components/Layout/Header'
import { ThemeProvider } from 'next-themes'
import Footer from './components/Layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import StructuredData from './components/StructuredData'

const DMSans = DM_Sans({
  variable: '--font-DM-Sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nedit Xhaferi - Portfolio | Web Developer & IT Professional',
  description: 'Aspiring IT Professional specializing in web development using SvelteKit, HTML, CSS, and Tailwind CSS. Experience in IT support, database management, and customer service. HTL graduate 2026.',
  keywords: 'Nedit Xhaferi, web developer, IT professional, portfolio, SvelteKit, HTML, CSS, Tailwind, database management, IT support',
  authors: [{ name: 'Nedit Xhaferi' }],
  creator: 'Nedit Xhaferi',
  metadataBase: new URL('https://portofolio-jtaooe617-neditxhaferis-projects.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portofolio-jtaooe617-neditxhaferis-projects.vercel.app',
    siteName: 'Nedit Xhaferi Portfolio',
    title: 'Nedit Xhaferi - Portfolio | Web Developer & IT Professional',
    description: 'Aspiring IT Professional specializing in web development. Explore my skills, projects, and experience.',
    images: [
      {
        url: 'https://portofolio-jtaooe617-neditxhaferis-projects.vercel.app/images/banner/blogforgeCover.webp',
        width: 1200,
        height: 630,
        alt: 'Nedit Xhaferi Portfolio',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nedit Xhaferi - Portfolio',
    description: 'Web Developer & IT Professional Portfolio',
    images: ['https://portofolio-jtaooe617-neditxhaferis-projects.vercel.app/images/banner/blogforgeCover.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://portofolio-jtaooe617-neditxhaferis-projects.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${DMSans.variable} antialiased dark:bg-darkmode`}>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
