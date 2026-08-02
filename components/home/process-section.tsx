'use client'

import { useState } from 'react'
import { Calendar, PenTool, Flame, Sparkles, CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

interface ProcessSectionProps {
  onBookNow: () => void
}

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Consultation & Concept',
    duration: '30–45 min',
    tag: 'Free Virtual or In-Studio',
    description:
      'Meet with your dedicated artist to discuss placement, style, symbolism, and custom stencil sizing.',
    highlights: ['Custom digital mockups', 'Sizing & body mapping', 'Transparent price quote'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Stencil & Body Fitting',
    duration: '20–30 min',
    tag: 'Ergonomic Accuracy',
    description:
      'We craft a high-definition stencil for perfect anatomical placement that flows with your body.',
    highlights: ['Anatomical alignment', 'Multiple placement tests', 'Stencil approval checkpoint'],
  },
  {
    number: '03',
    icon: Flame,
    title: 'Precision Tattooing',
    duration: 'Varies by design',
    tag: 'Hospital-Grade Sterile',
    description:
      'Relax in our private suites while your artist works with single-use needles and organic pigments.',
    highlights: ['Sterile single-use cartridges', 'Organic vegan-friendly ink', 'Comfort amenities & breaks'],
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Aftercare & Touch-Up',
    duration: '14-day healing',
    tag: '90-Day Guarantee',
    description:
      'Receive a medical-grade wrap and aftercare kit. Includes a free touch-up within 90 days.',
    highlights: ['Medical-grade Derm Shield', 'Premium healing balm', '90-day touch-up guarantee'],
  },
]

export default function ProcessSection({ onBookNow }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0)
  const current = steps[activeStep]
  const Icon = current.icon

  return (
    <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">The Ink Journey</span>
          <h2 className="mt-3 text-foreground">How Your Tattoo Comes to Life</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From initial concept to final touch-up — a seamless, sterile, and collaborative process.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((step, idx) => {
            const StepIcon = step.icon
            const isActive = activeStep === idx
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-card border-accent/40'
                    : 'bg-card/30 border-border hover:border-border/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-lg font-serif font-bold ${isActive ? 'text-accent' : 'text-muted-foreground/50'}`}>
                    {step.number}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-accent/10 text-accent' : 'bg-secondary text-muted-foreground'}`}>
                    <StepIcon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-foreground line-clamp-1">{step.title}</h3>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3" /> {step.duration}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent font-medium bg-accent/8 px-3 py-1 rounded-full border border-accent/15">
                  <Sparkles className="w-3 h-3" /> Step {current.number} — {current.tag}
                </span>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                  {current.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{current.description}</p>

                <div className="space-y-2.5 pt-1">
                  {current.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <Button
                    onClick={onBookNow}
                    className="bg-accent hover:bg-[#F5C74F] text-white font-medium h-10 px-5 text-sm"
                  >
                    Start Your Journey <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Right Info Box */}
              <div className="lg:col-span-5">
                <div className="bg-secondary/30 border border-border/60 rounded-xl p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-serif font-bold text-sm">
                      {current.number}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-accent font-medium">Stage Guarantee</p>
                      <p className="text-sm font-medium text-foreground">100% Client Satisfaction</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-muted-foreground">
                    <div className="flex justify-between border-b border-border/30 pb-2">
                      <span>Hygiene Standard:</span>
                      <span className="font-medium text-accent">Medical Grade</span>
                    </div>
                    <div className="flex justify-between border-b border-border/30 pb-2">
                      <span>Artist Oversight:</span>
                      <span className="font-medium text-foreground">Master Specialist</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Touch-Up Included:</span>
                      <span className="font-medium text-accent">Yes (90 Days)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
