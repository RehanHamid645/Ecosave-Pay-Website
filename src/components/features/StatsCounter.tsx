'use client'

import { useEffect, useState, useRef } from 'react'
import { Building2, Users2, Banknote, Lightbulb } from 'lucide-react'

const stats = [
  {
    name: 'Businesses Helped',
    value: 50000,
    icon: Building2,
    suffix: '+'
  },
  {
    name: 'Customer Satisfaction',
    value: 98,
    icon: Users2,
    suffix: '%'
  },
  {
    name: 'Money Saved',
    value: 50,
    icon: Banknote,
    prefix: '£',
    suffix: 'M+'
  },
  {
    name: 'Potential Savings',
    value: 50,
    icon: Lightbulb,
    suffix: '%'
  }
]

export default function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            startAnimation()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const startAnimation = () => {
    const duration = 2000
    const steps = 50
    const stepDuration = duration / steps

    stats.forEach((stat, index) => {
      let current = 0
      const target = stat.value
      const increment = target / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = Math.round(current)
          return newCounts
        })
      }, stepDuration)
    })
  }

  return (
    <section ref={sectionRef} className="bg-[#3faa4e] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.name}
              className="flex flex-col items-center text-center text-white"
            >
              <div className="mb-4 rounded-full bg-white/10 p-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-4xl font-bold">
                {stat.prefix}{counts[index]}{stat.suffix}
              </div>
              <div className="mt-2 text-lg">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 