"use client"
import React from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

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
    
    ),
  }
);

function QuoteBannerContent() {
  
  const messages = [
    'Get a free quote in minutes',
    'Compare business energy and start saving',
    'Request your business quote online now',
    'Switch and save on business energy today',
    'Find the best energy deals for your business',
    'Save time and money with our energy quotes',

  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  
  const variants = {
    enter: { opacity: 0, y: -6 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 6 },
  };

  return (
    <motion.div
      id="quote-banner"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-[72px] sm:top-[128px] w-full bg-gray-800/90 backdrop-blur-md z-30 shadow-sm hidden md:block"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 text-center">
        <div className="flex items-center justify-center gap-4">
          <motion.div key={index} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.45 }}>
            <Link href="/energy-quote/step1" className="text-sm text-gray-100 font-semibold hover:underline">
              {messages[index]}
            </Link>
          </motion.div>
          <Link href="/energy-quote/step1" className="text-sm text-green-500 font-semibold bg-white/5 px-3 py-1 rounded-md hover:bg-white/10">
            Get a quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

 export default function QuoteBanner() {
  const pathname = usePathname();
  if (pathname.startsWith("/energy-quote")) return null;
  return <MotionQuoteBanner />;
}
  

