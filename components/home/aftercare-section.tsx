'use client'

import { ShieldAlert, Heart, CalendarCheck, CheckCircle2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
    <section className="px-4 md:px-8 bg-secondary/5 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-medium text-accent tracking-wider uppercase">Lifetime Satisfaction</span>
            <h2 className="text-foreground">Premium Healing & Touch-Up</h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              We ensure your ink looks as vibrant on day 1,000 as it does on day 1. Every session includes our signature Aftercare Pack and a complimentary 90-day touch-up guarantee.
            </p>

            <div className="bg-card border border-border p-5 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/8 text-accent">
                  <CalendarCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs md:text-sm text-foreground">90-Day Free Touch-Up</h4>
                  <p className="text-[11px] md:text-xs text-muted-foreground">Free pigment touch-up on all custom tattoos.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-border/30 pt-3">
                <div className="p-2 rounded-lg bg-accent/8 text-accent">
                  <Heart className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs md:text-sm text-foreground">Botanical Aftercare Pack</h4>
                  <p className="text-[11px] md:text-xs text-muted-foreground">Includes hypoallergenic wash & organic moisturizer balm.</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full sm:w-auto border-border text-foreground hover:bg-secondary font-medium h-10 px-5 text-sm"
              onClick={() => alert('Downloading official Ink Collective Aftercare PDF guide...')}
            >
              <Download className="w-4 h-4 mr-2 text-accent" /> Download Aftercare PDF Guide
            </Button>
          </motion.div>

          {/* Right Timeline Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {healingSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/30 transition-all duration-300 relative group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/8 px-2.5 py-0.5 rounded border border-accent/15">
                    {step.day}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent/50 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
