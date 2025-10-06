'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface PolaroidProps {
  src: string
  alt: string
  rotation?: number
  delay?: number
  scale?: number
  x?: number
  y?: number
  zIndex?: number
  onClick: () => void
}

const Polaroid = ({ src, alt, rotation = 0, delay = 0, scale = 1, x = 0, y = 0, zIndex = 1, onClick }: PolaroidProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
      animate={{ opacity: 1, scale: scale, rotate: rotation, x, y }}
      whileHover={{ 
        scale: scale * 1.05, 
        rotate: rotation - 2,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
      transition={{ delay, duration: 0.5 }}
      className="absolute shadow-lg cursor-pointer"
      style={{ zIndex }}
      onClick={onClick}
    >
      <div className="bg-white p-3 pb-6 shadow-md transform rounded-sm border border-gray-100">
        <div className="overflow-hidden">
          <Image 
            src={src} 
            alt={alt} 
            width={180} 
            height={180}
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
        {/* Tape effect */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-200/80 rounded-sm"></div>
      </div>
    </motion.div>
  )
}

interface LightboxProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        <button 
          className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
        
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
          onClick={onPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
          onClick={onNext}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-2 rounded-md shadow-2xl"
        >
          <div className="relative w-full aspect-square">
            <Image 
              src={images[currentIndex]} 
              alt={`Team Member ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function TeamCollage() {
  const [loaded, setLoaded] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  useEffect(() => {
    setLoaded(true)
    
    // Handle window resize for responsiveness
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener('resize', handleResize)
    handleResize() // Initial size
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // All team images from the directory (arranged in desired order)
  const teamImages = [
    `/img/team/team6.png`,  // First priority
    `/img/team/team5.png`,  // Second priority
    `/img/team/team2.png`,  // Third priority
    `/img/team/team12.png`, // Fourth priority
    `/img/team/team13.png`, // Fifth priority
    `/img/team/team1.png`,
    `/img/team/team3.png`,
    `/img/team/team4.png`,
    `/img/team/team7.png`,
    `/img/team/team8.png`,
    `/img/team/team9.png`,
    `/img/team/team10.png`,
    `/img/team/team11.png`,
    `/img/team/team14.png`,
  ]
  
  // Handle lightbox functionality
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }
  
  const closeLightbox = () => {
    setLightboxOpen(false)
  }
  
  const goToPrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? teamImages.length - 1 : prev - 1))
  }, [teamImages.length])
  
  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === teamImages.length - 1 ? 0 : prev + 1))
  }, [teamImages.length])
  
  // Handle key presses for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrevImage()
      if (e.key === 'ArrowRight') goToNextImage()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, goToPrevImage, goToNextImage])
  
  // Adjust positions based on screen size
  const getScaleFactor = () => {
    if (windowSize.width < 640) return 0.65 // mobile
    if (windowSize.width < 1024) return 0.8 // tablet
    return 1 // desktop
  }
  
  const scaleFactor = getScaleFactor()

  // Create a collage configuration with different positions, rotations, and scales
  // Priority images are placed with higher z-index values and more prominent positions
  const basePositions = [
    // Priority images with higher z-indexes
    { src: teamImages[0], rotation: -5, delay: 0.1, scale: 1.2, x: 0, y: -60, zIndex: 10 },      // team6.png - top priority
    { src: teamImages[1], rotation: 8, delay: 0.2, scale: 1.1, x: -120, y: 20, zIndex: 9 },      // team5.png
    { src: teamImages[2], rotation: -10, delay: 0.3, scale: 1.05, x: 120, y: 0, zIndex: 8 },     // team2.png
    { src: teamImages[3], rotation: 6, delay: 0.4, scale: 1, x: -80, y: -80, zIndex: 7 },        // team12.png
    { src: teamImages[4], rotation: -7, delay: 0.5, scale: 1, x: 80, y: -90, zIndex: 6 },        // team13.png
    
    // Other images
    { src: teamImages[5], rotation: 12, delay: 0.6, scale: 0.95, x: -160, y: 80, zIndex: 5 },
    { src: teamImages[6], rotation: -12, delay: 0.7, scale: 0.9, x: 160, y: 60, zIndex: 4 },
    { src: teamImages[7], rotation: 9, delay: 0.8, scale: 0.95, x: -40, y: 160, zIndex: 3 },
    { src: teamImages[8], rotation: -8, delay: 0.9, scale: 0.9, x: 180, y: -40, zIndex: 2 },
    { src: teamImages[9], rotation: 7, delay: 1.0, scale: 0.85, x: -200, y: -60, zIndex: 1 },
    { src: teamImages[10], rotation: -11, delay: 1.1, scale: 0.9, x: 40, y: 140, zIndex: 2 },
    { src: teamImages[11], rotation: 10, delay: 1.2, scale: 0.85, x: -140, y: -120, zIndex: 1 },
    { src: teamImages[12], rotation: -9, delay: 1.3, scale: 0.85, x: 140, y: -140, zIndex: 1 },
    { src: teamImages[13], rotation: 11, delay: 1.4, scale: 0.8, x: 0, y: 200, zIndex: 1 },
  ]
  
  // Apply scale factor to positions
  const polaroids = basePositions.map(p => ({
    ...p,
    scale: p.scale * scaleFactor,
    x: p.x * scaleFactor,
    y: p.y * scaleFactor
  }))

  return (
    <div className="relative h-[550px] sm:h-[600px] md:h-[650px] w-full mx-auto overflow-hidden rounded-xl">
      <div className="relative w-full h-full flex items-center justify-center">
        {loaded && polaroids.map((polaroid, index) => (
          <Polaroid
            key={index}
            src={polaroid.src}
            alt={`Team Member ${index + 1}`}
            rotation={polaroid.rotation}
            delay={polaroid.delay}
            scale={polaroid.scale}
            x={polaroid.x}
            y={polaroid.y}
            zIndex={polaroid.zIndex}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={teamImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onPrev={goToPrevImage}
            onNext={goToNextImage}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
