'use client'

import { ShieldCheck, Sparkles, Award, RefreshCw, CheckCircle } from 'lucide-react'

const standards = [
  {
    icon: ShieldCheck,
    title: 'Hospital-Grade Autoclave Sterilization',
    description: 'All non-disposable equipment undergoes multi-stage medical autoclave sterilization cycles certified daily.',
  },
  {
    icon: RefreshCw,
    title: '100% Single-Use Sterile Cartridges',
    description: 'Every needle cartridge is pre-sterilized, individually sealed, opened in front of you, and safely discarded after use.',
  },
  {
    icon: Sparkles,
    title: 'Organic & Vegan Certified Inks',
    description: 'We exclusively use EU-REACH compliant, non-toxic, vegan organic pigments safe for all skin sensitivities.',
  },
  {
    icon: Award,
    title: 'Certified Master Tattoo Artists',
    description: 'Our team maintains annual certifications in Bloodborne Pathogens, First Aid, and Advanced Micro-Pigmentation.',
  },
]

export default function SafetySection() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-secondary/10 border-y border-border/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-3 inline-block bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
              Uncompromised Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Hospital-Grade Hygiene & Safety
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-foreground/60 text-sm md:text-base">
              Your safety is our top priority. We operate with strict clinical cleanliness and medical-grade protocols.
            </p>
          </div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Verification Badge Bar */}
        <div className="mt-12 bg-card/60 border border-border/80 rounded-xl p-4 md:p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-foreground">
              Cleanroom Inspection Status: <span className="text-emerald-400">100% Certified & Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-foreground/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent" /> EU REACH Compliant Inks
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent" /> Disposable Barriers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent" /> Medical Air Filtration
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
