"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLDivElement | null, force?: boolean) => void;
    };
  }
}

const MotionTrustpilotBanner = dynamic(
  () => Promise.resolve(TrustpilotBannerContent),
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

function TrustpilotBannerContent() {
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="fixed top-[72px] sm:top-[88px] w-full bg-white/80 backdrop-blur-md z-30 shadow-sm hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
          <div
            ref={ref}
            className="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="5613c9cde69ddc09340c6beb"
            data-businessunit-id="5eb017c68b0e360001cf55e9"
            data-style-height="100%"
            data-style-width="100%"
          >
            <a
              href="https://uk.trustpilot.com/review/www.ecosavegasandpower.com"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </motion.div>
    );
  } 

export default function TrustpilotBanner() {
  return <MotionTrustpilotBanner />;
} 