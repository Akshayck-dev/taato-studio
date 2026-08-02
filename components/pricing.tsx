'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

interface PricingProps {
  onBookNow?: () => void
}

const pricingTiers = [
  {
    name: 'Small & Minimalist',
    price: '$150',
    description: 'Perfect for small, simple fine line designs',
    features: ['Under 3 inches', 'Single color / Fine line', '1–2 hours session', 'Free 90-day touch-up'],
  },
  {
    name: 'Medium Custom',
    price: '$350',
    description: 'Ideal for detailed custom concepts',
    features: ['3–5 inches', 'Multiple colors & shading', '2–4 hours session', 'Free touch-ups (6 months)', 'Custom stencil included'],
    highlighted: true,
  },
  {
    name: 'Large Masterpiece',
    price: '$600+',
    description: 'For complex custom pieces & sleeves',
    features: ['5+ inches', 'Full color realism', '4+ hours session', 'Free touch-ups (1 year)', 'Design consultation included'],
  },
]

export default function Pricing({ onBookNow }: PricingProps) {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Transparent Pricing</span>
          <h2 className="mt-3 text-foreground">Simple, Honest Pricing</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Our pricing is transparent — based on complexity, size, and artist specialty.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-card border border-accent/40 relative'
                  : 'bg-card border border-border hover:border-border/80'
              }`}
            >
              {/* Most Popular badge */}
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{tier.name}</h3>
                <div className="text-3xl font-serif font-bold text-foreground mb-1">{tier.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={onBookNow}
                className={`w-full font-medium h-11 ${
                  tier.highlighted
                    ? 'bg-accent hover:bg-[#F5C74F] text-white'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground border border-border'
                }`}
              >
                Book This Tier
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
