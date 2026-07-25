'use client'

import { Button } from '@/components/ui/button'
import { Calendar, ShieldCheck, Sparkles, Star, ArrowRight, CheckCircle2 } from 'lucide-react'

interface HeroProps {
  onBookNow: () => void
  onViewPortfolio?: () => void
}

export default function Hero({ onBookNow, onViewPortfolio }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-100px)] bg-background overflow-hidden flex items-center justify-center px-4 md:px-8 py-12 lg:py-16">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1600&q=80"
          alt="Studio Ambiance"
          className="w-full h-full object-cover filter grayscale contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      </div>

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container - Widescreen Desktop Grid (12 Columns) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Desktop Column: Headline, Value Proposition & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2.5 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-wider uppercase">
              Award-Winning Soho Tattoo Atelier
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
            Your Vision.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/90 to-amber-500">
              Masterfully Inked.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-foreground/75 leading-relaxed max-w-2xl font-normal">
            Experience bespoke custom body art engineered by world-class specialists. Operating in hospital-grade sterile private suites in the heart of New York.
          </p>

          {/* Key Value Pill Highlights */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-foreground/80 font-medium pt-2">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" /> Hospital-Grade Sterilization
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Organic & Vegan Inks
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Free 90-Day Touch-Up
            </span>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Button
              onClick={onBookNow}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-accent/25 transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Custom Consultation
            </Button>
            <Button
              onClick={onViewPortfolio}
              variant="outline"
              size="lg"
              className="border-border/80 text-foreground hover:bg-secondary/80 font-semibold text-base px-8 py-6 rounded-xl backdrop-blur-sm"
            >
              Explore Artist Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Desktop Proof & Stats Counter */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50 max-w-xl">
            <div className="bg-card/50 border border-border/60 p-4 rounded-xl backdrop-blur-sm hover:border-accent/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-accent">2,500+</div>
              <p className="text-xs text-foreground/60 font-medium">Custom Pieces Inked</p>
            </div>
            <div className="bg-card/50 border border-border/60 p-4 rounded-xl backdrop-blur-sm hover:border-accent/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-accent">12</div>
              <p className="text-xs text-foreground/60 font-medium">Resident Artists</p>
            </div>
            <div className="bg-card/50 border border-border/60 p-4 rounded-xl backdrop-blur-sm hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-serif font-bold text-accent">
                4.96 <Star className="w-5 h-5 fill-accent text-accent inline" />
              </div>
              <p className="text-xs text-foreground/60 font-medium">Client Rating (400+)</p>
            </div>
          </div>
        </div>

        {/* Right Desktop Column: Interactive Visual Showcase Card */}
        <div className="lg:col-span-5 hidden sm:block">
          <div className="relative bg-card border border-border/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl group hover:border-accent/50 transition-all duration-500">
            
            {/* Top Card Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Live Studio Status
                </span>
              </div>
              <span className="text-xs text-foreground/60 font-medium">Soho Atelier • Open Now</span>
            </div>

            {/* Featured Master Piece Banner */}
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-6 group-hover:shadow-2xl transition-all">
              <img
                src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80"
                alt="Master Artwork Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase bg-accent text-accent-foreground px-2 py-0.5 rounded tracking-wider">
                    Featured Master Piece
                  </span>
                  <h4 className="text-lg font-serif font-bold text-white mt-1">Fine Line Geometry & Micro-Realism</h4>
                  <p className="text-xs text-white/80">Artist: Elena Vasquez • 4.5 hrs session</p>
                </div>
              </div>
            </div>

            {/* Quick Interactive Appointment Mini-Widget */}
            <div className="bg-secondary/60 border border-border/60 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-foreground/70 font-semibold">Next Available Opening:</span>
                <span className="text-accent font-bold">Tomorrow at 2:00 PM</span>
              </div>
              <Button
                onClick={onBookNow}
                size="sm"
                className="w-full bg-accent/90 hover:bg-accent text-accent-foreground font-semibold text-xs py-2 rounded-lg"
              >
                Reserve Next Slot Online
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

