'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'interactive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  animate?: boolean
  onClick?: () => void
  href?: string
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'pulse' | 'tilt' | 'bounce' | 'shine' | 'flip' | 'ripple' | 'morph' | 'none'
  highlight?: boolean
}

interface HoverEffect {
  whileHover?: {
    y?: number | number[]
    scale?: number | number[]
    boxShadow?: string
    rotateX?: number
    rotateY?: number | number[]
    borderRadius?: string[]
    rotate?: number[]
    transition?: {
      duration?: number
      repeat?: number
      ease?: string
    }
  }
  whileTap?: {
    y?: number
    scale?: number
  }
  style?: {
    transformStyle?: 'preserve-3d' | 'flat'
    perspective?: string
    backfaceVisibility?: 'visible' | 'hidden'
  }
  className?: string
  animate?: {
    scale?: number[]
    opacity?: number[]
    transition?: {
      duration: number
      repeat?: number
    }
  }
}

const variants = {
  default: '',
  hover: 'hover:shadow-lg hover:-translate-y-1',
  interactive: 'hover:shadow-lg hover:-translate-y-1 cursor-pointer',
}

const paddings = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const shadows = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
}

const hoverEffects: Record<string, HoverEffect> = {
  lift: {
    whileHover: { y: -8, transition: { duration: 0.2 } },
    whileTap: { y: -4 }
  },
  scale: {
    whileHover: { scale: 1.02, transition: { duration: 0.2 } },
    whileTap: { scale: 0.98 }
  },
  glow: {
    whileHover: { 
      boxShadow: '0 0 20px rgba(63, 170, 78, 0.3)',
      transition: { duration: 0.2 }
    }
  },
  pulse: {
    whileHover: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
      }
    }
  },
  tilt: {
    whileHover: {
      rotateX: 10,
      rotateY: 10,
      transition: { duration: 0.2 }
    },
    style: {
      transformStyle: 'preserve-3d',
      perspective: '1000px'
    }
  },
  bounce: {
    whileHover: {
      y: [0, -6, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  shine: {
    whileHover: {},
    className: 'overflow-hidden before:absolute before:inset-0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-[0.6s] before:z-10'
  },
  flip: {
    whileHover: { 
      rotateY: 180,
      transition: { duration: 0.4 }
    },
    style: {
      transformStyle: 'preserve-3d',
      perspective: '1000px',
      backfaceVisibility: 'visible'
    },
    className: 'group'
  },
  ripple: {
    className: 'overflow-hidden group',
    whileHover: {},
    animate: {
      scale: [1, 1.5],
      opacity: [0.4, 0],
      transition: { duration: 1, repeat: Infinity }
    }
  },
  morph: {
    whileHover: {
      borderRadius: ['10%', '25%', '10%'],
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  none: {}
}

const Card = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  shadow = 'md',
  animate = true,
  onClick,
  href,
  hoverEffect = 'none',
  highlight = false,
  ...props
}: CardProps & Omit<MotionProps, keyof CardProps>) => {
  const Component = motion.div
  const effect = hoverEffects[hoverEffect] || hoverEffects.none

  const combinedProps = {
    ...(animate && {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.3 }
    }),
    ...(effect.whileHover && { whileHover: effect.whileHover }),
    ...(effect.whileTap && { whileTap: effect.whileTap }),
    ...(effect.animate && { animate: effect.animate }),
    onClick,
    className: cn(
      'bg-white rounded-lg relative',
      variants[variant],
      paddings[padding],
      shadows[shadow],
      highlight && 'ring-2 ring-[#3faa4e] ring-offset-2',
      variant !== 'default' && 'transition-all duration-200',
      effect.className,
      className
    ),
    style: {
      ...(effect.style || {}),
      ...(props.style || {})
    },
    ...props
  }

  const card = (
    <Component {...combinedProps}>
      {highlight && (
        <motion.div
          className="absolute -top-1 -right-1 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-[#3faa4e] text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        </motion.div>
      )}
      {hoverEffect === 'ripple' && (
        <motion.div
          className="absolute inset-0 bg-white/30 rounded-lg pointer-events-none"
          initial={{ scale: 0, x: '-50%', y: '-50%' }}
          whileHover={{ scale: 2 }}
          transition={{ duration: 0.5 }}
          style={{ left: '50%', top: '50%' }}
        />
      )}
      {hoverEffect === 'flip' && (
        <div className="relative group-hover:rotate-y-180 transition-transform duration-500 transform-preserve-3d">
          <div className="backface-hidden">
            {children}
          </div>
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#3faa4e] text-white rounded-lg flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Click to Learn More</h3>
              <p className="text-sm opacity-80">Discover all the features and benefits</p>
            </div>
          </div>
        </div>
      )}
      {hoverEffect !== 'flip' && children}
      {variant === 'interactive' && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-black opacity-0 transition-opacity"
          whileHover={{ opacity: 0.02 }}
        />
      )}
    </Component>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {card}
      </a>
    )
  }

  return card
}

export default Card 