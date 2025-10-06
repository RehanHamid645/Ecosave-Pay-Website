"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Link from "next/link";

declare global {
  interface Window {
    QuoteBanner?: {
      loadFromElement: (element: HTMLDivElement | null, force?: boolean) => void;
    };
  }
}

const MotionQuoteBanner = dynamic(
  () => Promise.resolve(QuoteBannerContent),
  { 
    ssr: false,
    loading: () => (
      <div className="fixed top-[88px] w-full bg-white/80 backdrop-blur-md z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
          <div className="min-h-[24px]" />
        </div>
      </div>
    )
  }
);

function QuoteBannerContent() {
    const ref = React.useRef<HTMLDivElement>(null);
  
    React.useEffect(() => {
      const loadTrustbox = () => {
        if (window.Trustpilot && ref.current) {
          window.Trustpilot.loadFromElement(ref.current, true);
        }
      };
  
      const timer = setTimeout(loadTrustbox, 100);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <motion.div 
        id="quote-banner"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-[72px] sm:top-[128px] w-full bg-gray-700 backdrop-blur-md z-30 shadow-sm hidden md:block"
      >
        <p className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 text-center text-sm text-gray-100">
          Get a free, no-obligation quote today! Call us at
          <a href="tel:0330 403 7373" className="text-green-600 font-semibold hover:underline">
            {" 0330 403 7373"}
          </a>
          , or{" "}
          <Link href="/energy-quote" className="text-green-600 font-semibold hover:underline"> 
            request a quote online
          </Link>
          .
        </p>


      </motion.div>
    );
  } 

export default function QuoteBanner() {
  const pathname = usePathname();
    if (pathname.startsWith("/energy-quote")) return null;
  return <MotionQuoteBanner />;
} 