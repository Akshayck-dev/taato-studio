'use client'

import { Calendar, ShieldCheck, Sparkles, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ConsultationCTAProps {
  onBookNow: () => void
}

export default function ConsultationCTA({ onBookNow }: ConsultationCTAProps) {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-card via-secondary/70 to-card border border-accent/30 rounded-3xl p-8 md:p-12 lg:p-14 shadow-2xl shadow-accent/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Value Props */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                Ready to Bring Your Concept to Life?
              </div>

              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
                Transform Your Idea Into
                <br />
                <span className="text-accent">Timeless Custom Ink</span>
              </h2>

              <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
                Schedule your consultation with Soho’s leading master tattoo artists. We guide you through placement design, stencil mapping, and offer transparent pricing upfront.
              </p>

              {/* Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-foreground/80 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Hospital-Grade Medical Sterilization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Free Digital Stencil & Placement Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Organic Vegan Certified Pigments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Free 90-Day Guarantee Touch-Up</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Panel Box */}
            <div className="lg:col-span-5 bg-background/60 border border-border/80 rounded-2xl p-6 sm:p-8 space-y-5 text-center lg:text-left backdrop-blur-md">
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground">Book Your Session</h3>
                <p className="text-xs text-foreground/60 mt-1">Select your artist or request a custom quote online</p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={onBookNow}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base py-6 rounded-xl shadow-lg shadow-accent/20"
                >
                  Start Custom Booking <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button
                  onClick={onBookNow}
                  variant="outline"
                  size="lg"
                  className="w-full border border-border/80 text-foreground hover:bg-secondary font-semibold text-sm py-5 rounded-xl"
                >
                  Free Virtual Artist Consultation
                </Button>
              </div>

              <p className="text-[11px] text-foreground/50 text-center">
                🔒 Zero booking obligations • Free instant quote estimation
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

