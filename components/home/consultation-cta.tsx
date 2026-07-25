'use client'

import { Calendar, ShieldCheck, Sparkles, MessageSquare, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ConsultationCTAProps {
  onBookNow: () => void
}

export default function ConsultationCTA({ onBookNow }: ConsultationCTAProps) {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-card via-secondary/80 to-card border border-accent/30 rounded-3xl p-8 md:p-14 text-center shadow-2xl shadow-accent/5">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4" /> Ready for Your Next Tattoo?
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground tracking-tight">
            Turn Your Vision Into Timeless Ink
          </h2>

          <p className="text-base md:text-lg text-foreground/75 max-w-2xl mx-auto mb-8 leading-relaxed">
            Reserve your consultation with our award-winning master artists. Receive a custom stencil design, body placement advice, and transparent pricing.
          </p>

          {/* Quick Perks */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-xs md:text-sm text-foreground/80 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" /> 100% Sterile & Hospital-Grade
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" /> Flexible Scheduling & Reminders
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-accent" /> Free 1-on-1 Virtual Consultation
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={onBookNow}
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 rounded-xl shadow-lg shadow-accent/20"
            >
              Book Appointment Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={onBookNow}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border border-border text-foreground hover:bg-secondary font-semibold text-base px-8 py-6 rounded-xl"
            >
              Request Free Virtual Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
