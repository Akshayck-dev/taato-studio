'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import PricingCalculator from './pricing-calculator'

interface PricingProps {
  onBookNow?: () => void
}

const pricingTiers = [
  {
    name: 'Small & Minimalist',
    price: '$150',
    description: 'Perfect for small, simple fine line designs',
    features: ['Under 3 inches', 'Single color / Fine line', '1-2 hours session', 'Free 90-day touch-up'],
  },
  {
    name: 'Medium Custom',
    price: '$350',
    description: 'Ideal for detailed custom concepts',
    features: ['3-5 inches', 'Multiple colors & shading', '2-4 hours session', 'Free touch-ups (6 months)', 'Custom stencil design included'],
    highlighted: true,
  },
  {
    name: 'Large Masterpiece',
    price: '$600+',
    description: 'For complex custom pieces & sleeves',
    features: ['5+ inches', 'Full color realism spectrum', '4+ hours session', 'Free touch-ups (1 year)', 'Full custom design consultation'],
  },
]

export default function Pricing({ onBookNow }: PricingProps) {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-4 inline-block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Pricing Plans & Instant Estimator
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            Our pricing is completely transparent based on complexity, size, and artist specialty.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-accent text-accent-foreground border-2 border-accent shadow-xl shadow-accent/20 relative md:scale-105 z-10'
                  : 'bg-card border border-border hover:border-accent/50 text-foreground'
              }`}
            >
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${tier.highlighted ? 'text-accent-foreground' : ''}`}>
                  {tier.name}
                </h3>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${tier.highlighted ? 'text-accent-foreground' : 'text-accent'}`}>
                  {tier.price}
                </div>
                <p className={`text-sm mb-6 ${tier.highlighted ? 'text-accent-foreground/80' : 'text-foreground/60'}`}>
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 text-sm ${tier.highlighted ? 'text-accent-foreground' : ''}`}>
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={onBookNow}
                className={`w-full font-semibold py-6 ${
                  tier.highlighted
                    ? 'bg-accent-foreground text-accent hover:bg-accent-foreground/90'
                    : 'bg-accent hover:bg-accent/90 text-accent-foreground'
                }`}
              >
                Book This Tier
              </Button>
            </div>
          ))}
        </div>

        {/* Interactive Pricing Calculator Component */}
        <PricingCalculator onBookEstimate={() => onBookNow?.()} />
      </div>
    </section>
  )
}
