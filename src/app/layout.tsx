
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import Trustpilot from "@/components/features/Trustpilot";
import { HeroUIProvider } from "@heroui/react"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/react"
import CookieConsent from "@/components/shared/CookieConsent";
import { Suspense } from 'react'
import Loading from './loading'
import ErrorBoundary from '@/components/shared/ErrorBoundary'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google';
import QuoteBanner from '@/components/features/QuoteBanner'

// Optimize font loading

const inter = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], 
  preload: true,
  adjustFontFallback: true
})

export const metadata: Metadata = {
  title: "Ecosave - Business Energy & Services Comparison",
  description:
    "Compare and save on business energy, insurance, connectivity, and finance solutions.",
  metadataBase: new URL('https://ecosavegasandpower.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Ecosave - Business Energy & Services Comparison',
    description: 'Compare and save on business energy, insurance, connectivity, and finance solutions.',
    url: 'https://ecosavegasandpower.com',
    siteName: 'Ecosave Gas & Power',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://widget.trustpilot.com"
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          as="script" 
          href="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/img/partners/british-gas.svg"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/img/partners/edf.svg"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/img/partners/eon-next.svg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="google-site-verification" content="2nU0_lh5Eua8MQ9KBqMwHGwCh_y_mCxalAzsR4aE5VI" />
      </head>
      <GoogleAnalytics gaId="G-1RRD591LG2" />
      <GoogleTagManager gtmId="GTM-PH3KJ9LL" />
      <body className={`${inter.className} h-full`}>
        <ErrorBoundary>
          <Suspense>
            <HeroUIProvider>
                <Providers>
                <Suspense fallback={<div className="h-20 bg-white" />}>
                  <ErrorBoundary>
                  <Header />
                  </ErrorBoundary>
                </Suspense>

                <Suspense fallback={<div className="h-[72px]" />}>
                  <ErrorBoundary>
                  <Trustpilot />
                  </ErrorBoundary>
                </Suspense>

                <Suspense fallback={<div className="h-[72px]" />}>
                  <ErrorBoundary>
                  <QuoteBanner />
                  </ErrorBoundary>
                </Suspense>

                <div className={`flex-grow`}>
                  <ErrorBoundary>
                  <Suspense fallback={<Loading />}>
                    {children}
                  </Suspense>
                  </ErrorBoundary>
                </div>

                <Suspense fallback={null}>
                  <ErrorBoundary>
                    <Footer />
                  </ErrorBoundary>
                </Suspense>

                <Suspense fallback={null}>
                  <CookieConsent />
                  <Analytics /> 
                  <SpeedInsights />
                </Suspense>
              </Providers>
            </HeroUIProvider>
          </Suspense>
        </ErrorBoundary>

        <script 
          type="text/javascript" 
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" 
          async 
          defer
        />

      </body>
    </html>
  );
}
