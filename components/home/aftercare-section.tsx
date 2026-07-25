'use client'

import { ShieldAlert, Heart, CalendarCheck, CheckCircle2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const healingSteps = [
  {
    day: 'Days 1 - 3',
    title: 'Derm Shield Protection',
    desc: 'Keep the breathable medical foil wrap intact. Your skin stays sealed against microbes while natural healing plasma concentrates.',
  },
  {
    day: 'Days 4 - 7',
    title: 'Gentle Cleansing & Hydration',
    desc: 'Remove wrap under warm water, clean with fragrance-free antibacterial soap, and apply our organic tattoo ointment sparingly.',
  },
  {
    day: 'Days 8 - 14',
    title: 'Peeling & Skin Renewal',
    desc: 'Light flaking is normal. Continue moisturizing twice daily. Never pick or scratch the healing epidermal layer.',
  },
  {
    day: 'Day 90 Guarantee',
    title: 'Complimentary Touch-Up',
    desc: 'Visit us anytime within 90 days for a free inspection and complimentary touch-up if any line or pigment needs enhancement.',
  },
]

export default function AftercareSection() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-secondary/10 border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Summary */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-3 inline-block bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
              Lifetime Satisfaction
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Premium Healing & Touch-Up Policy
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed">
              We ensure your ink looks as vibrant on day 1,000 as it does on day 1. Every session includes our signature Aftercare Pack and a complimentary 90-day touch-up guarantee.
            </p>

            <div className="bg-card border border-border p-5 rounded-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">90-Day Free Touch-Up</h4>
                  <p className="text-xs text-foreground/60">Free pigment touch-up on all custom tattoos.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-border/60 pt-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Botanical Aftercare Pack</h4>
                  <p className="text-xs text-foreground/60">Includes hypoallergenic wash & organic moisturizer balm.</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full sm:w-auto border border-border text-foreground hover:bg-secondary font-semibold py-5 rounded-lg text-sm"
              onClick={() => alert('Downloading official Ink Collective Aftercare PDF guide...')}
            >
              <Download className="w-4 h-4 mr-2 text-accent" /> Download Aftercare PDF Guide
            </Button>
          </div>

          {/* Right Timeline Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {healingSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/40 transition-all duration-300 relative group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded">
                    {step.day}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
