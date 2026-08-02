'use client'

import { Calendar, ShieldCheck, Sparkles, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface ConsultationCTAProps {
  onBookNow: () => void
}

export default function ConsultationCTA({ onBookNow }: ConsultationCTAProps) {
  return (
    <section className="px-4 md:px-8 py-6 md:py-10 lg:py-12 bg-background relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs text-accent font-medium bg-accent/8 px-3 py-1 rounded-full border border-accent/15">
                <Sparkles className="w-3.5 h-3.5" /> Ready to Ink?
              </span>

              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                Transform Your Idea Into
                <br />
                <span className="text-accent">Timeless Custom Ink</span>
              </h2>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                Schedule a consultation with our master artists. We guide you through placement, design sizing, and offer transparent pricing upfront.
              </p>

              {/* Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-muted-foreground pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Hospital-Grade Sterilization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Free Digital Stencil Fittings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Organic Vegan Certified Inks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Free 90-Day Touch-Up Policy</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Panel Box */}
            <div className="lg:col-span-5 bg-secondary/30 border border-border/60 rounded-xl p-5 md:p-6 space-y-4">
              <div>
                <h3 className="text-base font-semibold text-foreground">Book Your Session</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Select your artist or request a custom quote</p>
              </div>

              <div className="space-y-2.5">
                <Button
                  onClick={onBookNow}
                  className="w-full bg-accent hover:bg-[#FF5A5F] text-white font-medium h-10 px-5 text-sm"
                >
                  Start Custom Booking <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                
                <Button
                  onClick={onBookNow}
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-secondary font-medium h-10 px-5 text-sm"
                >
                  Free Artist Consultation
                </Button>
              </div>

              <p className="text-[10px] text-muted-foreground/60 text-center">
                🔒 Zero obligation • Instant estimate pricing
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
