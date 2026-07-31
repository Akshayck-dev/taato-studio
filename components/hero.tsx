'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroProps {
  onBookNow: () => void
  onViewPortfolio?: () => void
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const desktopImages = [
  '/hero-desktop-1.png',
  '/hero-desktop-2.png'
]

const mobileImages = [
  '/hero-mobile-1.png',
  '/hero-mobile-2.png'
]

export default function Hero({ onBookNow, onViewPortfolio }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % desktopImages.length)
    }, 6000) // Change image every 6 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100dvh] bg-background overflow-hidden flex items-center px-4 md:px-8 pt-32 pb-16 lg:pt-40 lg:pb-20">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        
        {/* Mobile Image Slider */}
        <div className="block md:hidden absolute inset-0">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={mobileImages[currentImageIndex]}
              alt="Studio atmosphere mobile"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </AnimatePresence>
        </div>
        
        {/* Desktop Image Slider */}
        <div className="hidden md:block absolute inset-0">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={desktopImages[currentImageIndex]}
              alt="Studio atmosphere desktop"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Subtle dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Left Content */}
        <div className="max-w-3xl space-y-6">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-white text-xs font-medium tracking-wider uppercase bg-black/30 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              Award-Winning Studio · SoHo, NYC
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white leading-[1.08]"
          >
            Your Story,{' '}
            <span className="text-accent drop-shadow-md">Permanently Inked.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/90 text-base lg:text-lg leading-relaxed max-w-xl drop-shadow-md"
          >
            Custom tattoo artistry by world-class specialists. Hospital-grade sterile suites, organic inks, and a complimentary 90-day touch-up guarantee.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3 pt-2">
            <Button
              onClick={onBookNow}
              className="bg-accent hover:bg-[#FF5A5F] text-white font-medium text-[15px] px-6 h-11 rounded-lg transition-colors shadow-lg shadow-accent/20"
            >
              Book Consultation
            </Button>
            <Button
              onClick={onViewPortfolio}
              variant="outline"
              className="border-white/30 text-white bg-black/20 backdrop-blur-sm hover:bg-white/10 font-medium text-[15px] px-6 h-11 rounded-lg"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-6 md:gap-8 pt-6 border-t border-white/20">
            <div>
              <div className="text-2xl font-serif font-bold text-white drop-shadow-md">2,500+</div>
              <p className="text-xs text-white/80">Custom Pieces</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div>
              <div className="text-2xl font-serif font-bold text-white drop-shadow-md">12</div>
              <p className="text-xs text-white/80">Master Artists</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div className="w-full md:w-auto mt-2 md:mt-0">
              <div className="flex items-center gap-1 text-2xl font-serif font-bold text-white drop-shadow-md">
                4.96 <Star className="w-4 h-4 fill-accent text-accent" />
              </div>
              <p className="text-xs text-white/80">Client Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
