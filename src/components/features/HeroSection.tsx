import { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { motion } from "framer-motion";
/* import TrustpilotWidget from "./TrustpilotWidget"; */

export const metadata: Metadata={
  title: 'Careers | Ecosave Gas and Power',
  description: 'Join us at Ecosave Gas and Power and be a part of a passionate and energetic team.',
  keywords:['Careers','Jobs','Join us','Work with us','Sustainable energy jobs','Energy consultancy careers'],
  metadataBase:new URL('https://ecosavegasandpower.com/careers'),

  alternates:{
    canonical:'/',
  },

  icons:'/favicon.ico',
  // apple: '/apple-touch-icon.png',

  openGraph: {
    title: 'About Us | Ecosave Gas and Power',
    description: 'Learn about Ecosave Gas and Power and our mission to help businesses reduce utility costs while promoting sustainable practices.',
    url: 'https://ecosavegasandpower.com/about',
    siteName: 'Ecosave Gas and Power',
    images: [
      {
        url: 'https://ecosavegasandpower.com/about/image.jpg',
        alt: 'About Ecosave Gas and Power',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HeroSection() {
  return (
    <section className="relative py-16 lg:py-48 ">
      <div className="absolute inset-0 bg-[url(/images/pexels-pixabay-46169.jpg)] bg-cover bg-center z-0"></div>
      <div className="absolute inset-0 bg-[#151f34] opacity-60 z-10"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 relative z-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="block"
              >
                Helping Over <span className="text-[#73c06a]">50,000 Businesses</span>
              </motion.span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              <span className="text-white">Save on</span> <span className="text-[#73c06a]" >Energy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-lg text-white"
            >
              The most trusted business energy consultancy in the UK. Our expert
              team simplifies the process of comparing and switching business
              utility suppliers to save you time and money.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45 }}
              className="mt-6 self-start"
            >
              <Link href="/energy-quote/step1">
                <Button
                  size="lg"
                  className="px-12 py-5 text-xl font-semibold text-white bg-gradient-to-r from-[#4fc76a] to-[#1fa25a] hover:from-[#6bd07f] hover:to-[#30a17e] shadow-lg hover:shadow-2xl transform transition duration-200 focus-visible:ring-4 focus-visible:ring-[#3faa4e]/30"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Compare Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
{/*             <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="/images/pexels-pixabay-46169.jpg"
                alt="Business Energy Solutions"
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-xl"
                priority
              />
            </motion.div> */}
{/*             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 rounded-lg shadow-lg"
            >
              <TrustpilotWidget />
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
