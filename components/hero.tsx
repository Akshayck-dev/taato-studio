'use client'

import { Button } from '@/components/ui/button'

interface HeroProps {
  onBookNow: () => void
  onViewPortfolio?: () => void
}

export default function Hero({ onBookNow, onViewPortfolio }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-background overflow-hidden flex items-center justify-center px-4 md:px-8">
      {/* Subtle Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1600&q=80"
          alt="Studio Ambiance"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
      </div>

      {/* Glow Accent */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Premium Tattoo Studio
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight mb-6 text-foreground">
          Your Story,
          <br />
          Permanently Inked
        </h1>

        <p className="text-base md:text-xl text-foreground/70 mb-8 leading-relaxed max-w-lg mx-auto">
          World-class tattoo artistry meets custom design. Work with award-winning artists who transform your vision into timeless ink.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onBookNow}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base md:text-lg px-8 py-6 md:py-7 rounded-lg shadow-lg shadow-accent/20"
          >
            Book Your Tattoo
          </Button>
          <Button
            onClick={onViewPortfolio}
            variant="outline"
            size="lg"
            className="border border-border text-foreground hover:bg-secondary font-semibold text-base md:text-lg px-8 py-6 md:py-7 rounded-lg"
          >
            View Portfolio
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 md:mt-20">
          <div className="bg-card/40 border border-border/50 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-serif font-bold text-accent">500+</div>
            <p className="text-xs md:text-sm text-foreground/60">Happy Clients</p>
          </div>
          <div className="bg-card/40 border border-border/50 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-serif font-bold text-accent">12</div>
            <p className="text-xs md:text-sm text-foreground/60">Master Artists</p>
          </div>
          <div className="bg-card/40 border border-border/50 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-serif font-bold text-accent">15+</div>
            <p className="text-xs md:text-sm text-foreground/60">Years Combined</p>
          </div>
        </div>
      </div>
    </section>
  )
}
