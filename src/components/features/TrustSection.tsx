'use client'

/* import { Star } from 'lucide-react' */
import { motion } from 'framer-motion'
/* import useEmblaCarousel from 'embla-carousel-react' */
/* import { ChevronLeft, ChevronRight } from 'lucide-react' */
/* import { useCallback, useEffect, useState } from 'react' */
import TrustpilotWidget from './TrustpilotWidget'

/* const reviews = [
  {
    id: 1,
    author: "David",
    rating: 5,
    title: "Just renewed my British Gas dual fuel…",
    text: "Just renewed my British Gas dual fuel contract for 3 years through eco save at a good price thank you Iain for sorting out the whole process for me. This is the second British Gas contract I have done through eco save and they have saved me a lot of money well done.",
  },
  {
    id: 2,
    author: "Gillian",
    rating: 5,
    title: "Olivia was really informative and went…",
    text: "Olivia was really informative and went the extra mile and rang me back with a better tariff. Thank you",
  },
  {
    id: 3,
    author: "J M",
    rating: 5,
    title: "Nice and easy to renew everybody I…",
    text: "Nice and easy to renew everybody I dealt with was polite and professional 5 stars to Iain campbell",
  },
  {
    id: 4,
    author: "Mr Cornwall",
    rating: 5,
    title: "The lady was very polite and helpful",
    text: "The lady was very polite and helpful, living in the country where emails take an age to get through but persistence paid of as our contract came through hours later and for this lm am grateful.",
  },
  {
    id: 5,
    author: "I J M",
    rating: 5,
    title: "They have been a pleasure to deal with…",
    text: "They have been a pleasure to deal with so far and i am happy to leave a 5 star rating, they have been very helpful in changing suppliers at no cost with cheaper rates and have also agreed to look into previous supplier to see if we have been overcharged as payments made to them where all over the place, just super friendly ppl to deal with over all. Thankyou for your help",
  },
  {
    id: 6,
    author: "Zoe",
    rating: 5,
    title: "The call was quick & informative…",
    text: "The call was quick & informative, Ian didn't keep me on the phone any longer than necessary & when transferring me to the admin, let me know how long it would take. There was a lot of background noise on the admin telephone call, I appreciate call centres are busy places, but made it quite difficult to hear some of the conversation & my hearing is good, if it was someone hard of hearing, then it would have been impossible. Both people who I spoke to were polite & to the point.",
  },
  {
    id: 7,
    author: "James Lake",
    rating: 5,
    title: "Ecosave harry 10/10…",
    text: "Had my contract sorted with Harry ivill, brilliant guy to deal with, sorted out contracts out with ease, nice and easy to sort contracts & in constant communication when I needed info from him. Would highly recommend harry 10/10 top lad",
  }
]
 */
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

/* const AUTOPLAY_INTERVAL = 5000 // 5 seconds */

export default function TrustSection() {
  // Create separate refs for mobile and desktop
  /* const [desktopEmblaRef, desktopEmblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    startIndex: 1
  })

  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    startIndex: 0
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null)

  const startAutoplay = useCallback(() => {
    if (autoplayInterval) return

    const interval = setInterval(() => {
      if (desktopEmblaApi) desktopEmblaApi.scrollNext()
      if (mobileEmblaApi) mobileEmblaApi.scrollNext()
    }, AUTOPLAY_INTERVAL)

    setAutoplayInterval(interval)
  }, [desktopEmblaApi, mobileEmblaApi, autoplayInterval])

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval)
      setAutoplayInterval(null)
    }
  }, [autoplayInterval])

  const scrollPrev = useCallback(() => {
    if (desktopEmblaApi) {
      stopAutoplay()
      desktopEmblaApi.scrollPrev()
    }
    if (mobileEmblaApi) {
      stopAutoplay()
      mobileEmblaApi.scrollPrev()
    }
  }, [desktopEmblaApi, mobileEmblaApi, stopAutoplay])

  const scrollNext = useCallback(() => {
    if (desktopEmblaApi) {
      stopAutoplay()
      desktopEmblaApi.scrollNext()
    }
    if (mobileEmblaApi) {
      stopAutoplay()
      mobileEmblaApi.scrollNext()
    }
  }, [desktopEmblaApi, mobileEmblaApi, stopAutoplay])

  const onSelect = useCallback(() => {
    // Update button states based on both carousels
    const updateButtonStates = () => {
      // Default to true if either carousel can scroll
      let canScrollPrev = true;
      let canScrollNext = true;
      
      if (desktopEmblaApi && mobileEmblaApi) {
        canScrollPrev = desktopEmblaApi.canScrollPrev() || mobileEmblaApi.canScrollPrev();
        canScrollNext = desktopEmblaApi.canScrollNext() || mobileEmblaApi.canScrollNext();
      } else if (desktopEmblaApi) {
        canScrollPrev = desktopEmblaApi.canScrollPrev();
        canScrollNext = desktopEmblaApi.canScrollNext();
      } else if (mobileEmblaApi) {
        canScrollPrev = mobileEmblaApi.canScrollPrev();
        canScrollNext = mobileEmblaApi.canScrollNext();
      }
      
      setPrevBtnEnabled(canScrollPrev);
      setNextBtnEnabled(canScrollNext);
    };
    
    updateButtonStates();
  }, [desktopEmblaApi, mobileEmblaApi]) */

  // Initialize autoplay and event listeners
  /* useEffect(() => {
    if (!desktopEmblaApi && !mobileEmblaApi) return
    
    onSelect()
    
    // Add event listeners to both carousels
    if (desktopEmblaApi) {
      desktopEmblaApi.on('select', onSelect)
      desktopEmblaApi.on('reInit', onSelect)
    }
    
    if (mobileEmblaApi) {
      mobileEmblaApi.on('select', onSelect)
      mobileEmblaApi.on('reInit', onSelect)
    }
    
    startAutoplay()

    return () => {
      stopAutoplay()
      
      if (desktopEmblaApi) {
        desktopEmblaApi.off('select', onSelect)
        desktopEmblaApi.off('reInit', onSelect)
      }
      
      if (mobileEmblaApi) {
        mobileEmblaApi.off('select', onSelect)
        mobileEmblaApi.off('reInit', onSelect)
      }
    }
  }, [desktopEmblaApi, mobileEmblaApi, onSelect, startAutoplay, stopAutoplay])

  const handleMouseEnter = useCallback(() => {
    stopAutoplay()
  }, [stopAutoplay])

  const handleMouseLeave = useCallback(() => {
    startAutoplay()
  }, [startAutoplay]) */

  /* const renderStars = (count: number) => (
    <div className="flex">
      {[...Array(count)].map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 text-[#00b67a] fill-current"
          aria-hidden="true"
        />
      ))}
    </div>
  ) */

  return (
    <section className="bg-gray-50 py-16 md:py-24" aria-labelledby="trust-section-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            id="trust-section-title"
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900"
          >
            Trusted by Thousands of Businesses
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See why our customers rate us as excellent on Trustpilot
          </motion.p>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm p-0 overflow-hidden md:w-[50%] md:mx-auto lg:w-[40%] mx-auto"
        >
          <div className="w-full">
            {/* Trustpilot Widget - Below Reviews on Mobile */}
            <div className="w-full border-t border-gray-100 flex flex-col">
              <div className="bg-white flex-grow p-4">
                <TrustpilotWidget />
              </div>
              <a
                href="https://uk.trustpilot.com/review/www.ecosavegasandpower.com"
                target="_blank"
                rel="noopener"
                className="block py-3 text-[#00b67a] font-medium hover:underline w-full text-center border-t border-gray-100 text-lg"
              >
                See all reviews →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}