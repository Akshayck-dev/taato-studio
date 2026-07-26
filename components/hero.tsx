'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { motion } from 'framer-motion'

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

export default function Hero({ onBookNow, onViewPortfolio }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-88px)] bg-background overflow-hidden flex items-center px-4 md:px-8 py-16 lg:py-20">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.08]">
        <img
          src="/hero-showcase.png"
          alt="Studio atmosphere"
          aria-hidden="true"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Ambient glow — subtle */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-accent text-xs font-medium tracking-wider uppercase bg-accent/8 border border-accent/15 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Award-Winning Studio · SoHo, NYC
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-foreground leading-[1.08]"
          >
            Your Story,{' '}
            <span className="text-accent">Permanently Inked.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl"
          >
            Custom tattoo artistry by world-class specialists. Hospital-grade sterile suites, organic inks, and a complimentary 90-day touch-up guarantee.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3 pt-2">
            <Button
              onClick={onBookNow}
              className="bg-accent hover:bg-[#FF5A5F] text-white font-medium text-[15px] px-6 h-11 rounded-lg transition-colors"
            >
              Book Consultation
            </Button>
            <Button
              onClick={onViewPortfolio}
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-medium text-[15px] px-6 h-11 rounded-lg"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-8 pt-6 border-t border-border/50">
            <div>
              <div className="text-2xl font-serif font-bold text-foreground">2,500+</div>
              <p className="text-xs text-muted-foreground">Custom Pieces</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-serif font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground">Master Artists</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="flex items-center gap-1 text-2xl font-serif font-bold text-foreground">
                4.96 <Star className="w-4 h-4 fill-accent text-accent" />
              </div>
              <p className="text-xs text-muted-foreground">Client Rating</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column — Showcase Card */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 hidden md:block"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-border/80 transition-all duration-500">
            {/* Image */}
            <div className="relative h-72 lg:h-80 overflow-hidden">
              <img
                src="/hero-showcase.png"
                alt="Featured studio artwork session"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[10px] font-medium uppercase tracking-wider text-accent bg-accent/15 px-2.5 py-1 rounded">
                  Featured Work
                </span>
                <h4 className="text-lg font-serif font-bold text-white mt-2">Fine Line Geometry</h4>
                <p className="text-xs text-white/70">by Elena Vasquez · 4.5 hrs</p>
              </div>
            </div>

            {/* Quick Booking Widget */}
            <div className="p-5 space-y-3 border-t border-border/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Next available</span>
                <span className="text-foreground font-medium">Tomorrow, 2:00 PM</span>
              </div>
              <Button
                onClick={onBookNow}
                variant="outline"
                size="sm"
                className="w-full text-xs h-9 border-border text-foreground hover:bg-secondary"
              >
                Reserve This Slot
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
