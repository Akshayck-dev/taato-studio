'use client'

import { useState } from 'react'
import { Calendar, PenTool, Flame, Sparkles, CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProcessSectionProps {
  onBookNow: () => void
}

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: '1-on-1 Consultation & Concept',
    duration: '30 - 45 mins',
    tag: 'Free Virtual or In-Studio',
    description:
      'Meet with your dedicated master artist to discuss placement, aesthetic style, symbolism, and custom stencil sizing.',
    highlights: ['Custom digital mockups', 'Sizing & body mapping', 'Transparent price quote'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Custom Stencil & Body Fitting',
    duration: '20 - 30 mins',
    tag: 'Ergonomic Accuracy',
    description:
      'We craft a high-definition surgical stencil to ensure perfect anatomical placement and flow with your body curves before inking.',
    highlights: ['Anatomical alignment', 'Multiple placement tests', 'Stencil approval checkpoint'],
  },
  {
    number: '03',
    icon: Flame,
    title: 'Precision Tattooing Session',
    duration: 'Varies by design',
    tag: 'Hospital-Grade Sterile',
    description:
      'Relax in our ergonomic private suites while your artist works with single-use needles and organic, vegan-certified pigments.',
    highlights: ['Sterile single-use cartridges', 'Organic vegan-friendly ink', 'Comfort amenities & breaks'],
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Aftercare & Free Touch-Up',
    duration: '14-Day Healing Period',
    tag: 'Lifetime Quality Guarantee',
    description:
      'Receive a medical-grade second skin wrap and a complete aftercare kit. Includes a free touch-up within 90 days.',
    highlights: ['Medical-grade Derm Shield', 'Premium healing balm kit', 'Free 90-day touch-up guarantee'],
  },
]

export default function ProcessSection({ onBookNow }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-3 inline-block bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            The Ink Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-5 tracking-tight text-foreground">
            How Your Tattoo Comes to Life
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            From initial concept to final touch-up, experience a seamless, sterile, and collaborative tattoo process.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isActive = activeStep === idx

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-card border-accent shadow-lg shadow-accent/10 scale-[1.02]'
                    : 'bg-card/40 border-border hover:border-accent/40 hover:bg-card/70'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-2xl font-serif font-bold ${
                      isActive ? 'text-accent' : 'text-foreground/40'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive ? 'bg-accent text-accent-foreground' : 'bg-secondary text-foreground/60'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-base text-foreground mb-1 line-clamp-1">
                  {step.title}
                </h3>
                <span className="text-xs text-foreground/50 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent/80" /> {step.duration}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/20">
                <Sparkles className="w-3.5 h-3.5" />
                Step {steps[activeStep].number} — {steps[activeStep].tag}
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                {steps[activeStep].title}
              </h3>

              <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                {steps[activeStep].highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  onClick={onBookNow}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-5 rounded-lg"
                >
                  Start Step {steps[activeStep].number} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <span className="text-xs text-foreground/50">Average preparation time: 10 mins</span>
              </div>
            </div>

            {/* Right Visual Box */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-gradient-to-br from-secondary/80 to-background border border-border/80 rounded-xl p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-serif font-bold">
                    {steps[activeStep].number}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold">Stage Guarantee</p>
                    <p className="text-sm font-semibold text-foreground">100% Client Satisfaction</p>
                  </div>
                </div>

                <div className="p-4 bg-background/60 rounded-lg border border-border/50 text-xs text-foreground/70 space-y-2">
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-foreground/50">Hygiene Standard:</span>
                    <span className="font-semibold text-accent">Medical Grade</span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-foreground/50">Artist Oversight:</span>
                    <span className="font-semibold text-foreground">Master Specialist</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Touch-Up Included:</span>
                    <span className="font-semibold text-accent">Yes (90 Days)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
