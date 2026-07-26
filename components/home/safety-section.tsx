'use client'

import { ShieldCheck, Sparkles, Award, RefreshCw, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const standards = [
  {
    icon: ShieldCheck,
    title: 'Autoclave Sterilization',
    description: 'All non-disposable equipment undergoes medical autoclave sterilization cycles certified daily.',
  },
  {
    icon: RefreshCw,
    title: 'Single-Use Cartridges',
    description: 'Every needle cartridge is pre-sterilized, individually sealed, and safely discarded after use.',
  },
  {
    icon: Sparkles,
    title: 'Organic Vegan Inks',
    description: 'EU-REACH compliant, non-toxic, vegan organic pigments safe for all skin sensitivities.',
  },
  {
    icon: Award,
    title: 'Certified Artists',
    description: 'Annual certifications in Bloodborne Pathogens, First Aid, and Advanced Micro-Pigmentation.',
  },
]

export default function SafetySection() {
  return (
    <section className="px-4 md:px-8 bg-secondary/5 border-y border-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Safety Standards</span>
          <h2 className="mt-3 text-foreground">Hospital-Grade Hygiene</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Your safety is our top priority. We operate with strict clinical cleanliness and medical-grade protocols.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {standards.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Verification Bar */}
        <div className="mt-10 bg-card border border-border rounded-xl p-4 md:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-foreground">
              Status: <span className="text-emerald-400">100% Certified & Compliant</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-accent" /> EU REACH Inks
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-accent" /> Disposable Barriers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-accent" /> Air Filtration
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
