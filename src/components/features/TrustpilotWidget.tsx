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

const MotionTrustpilotWidget = dynamic(
  () => Promise.resolve(TrustpilotWidgetContent),
  { 
    ssr: false,
    loading: () => <div className="bg-gray-50 min-h-[220px] flex items-center justify-center p-4 text-gray-500">Loading Trustpilot reviews...</div>
  }
);

function TrustpilotWidgetContent() {
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-2 md:p-4"
    >
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale="en-GB"
        data-template-id="53aa8807dec7e10d38f59f32" 
        data-businessunit-id="5eb017c68b0e360001cf55e9" 
        data-style-height="150px" 
        data-style-width="100%"
        data-theme="light"
        data-stars="5"
        data-text-color="#00b67a"
      >
        <a
          href="https://uk.trustpilot.com/review/www.ecosavegasandpower.com"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
    </motion.div>
  );
}

export default function TrustpilotWidget() {
  return <MotionTrustpilotWidget />;
} 