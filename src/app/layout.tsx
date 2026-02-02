import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/smooth-scroll'
import TransitionProvider from '@/components/transition-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FT Photography',
  description: 'A cinematic photography portfolio',
}

import Footer from '@/components/footer'
import Header from '@/components/header'
import { IntroProvider } from '@/components/intro-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (window.location.pathname === '/' || window.location.pathname === '/FT-Photography/') {
                  const hasSeen = sessionStorage.getItem('hasSeenIntro');
                  if (!hasSeen) {
                    document.documentElement.classList.add('intro-active');
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <IntroProvider>
          <SmoothScroll>
            <Header />
            <TransitionProvider>
              {children}
              <Footer />
            </TransitionProvider>
          </SmoothScroll>
        </IntroProvider>
      </body>
    </html>
  )
}
