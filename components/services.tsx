'use client'

import { Zap, Palette, Heart, Sparkles, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

import FAQ from './faq'

const services = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Collaborate with our artists to create a unique design that tells your story.',
    duration: '2–6 hours',
    price: 'From $250',
  },
  {
    icon: Zap,
    title: 'Cover-ups & Reworks',
    description: 'Transform existing tattoos into something you truly love.',
    duration: '3–8 hours',
    price: 'From $350',
  },
  {
    icon: Heart,
    title: 'Fine Line & Detail',
    description: 'Intricate designs with meticulous attention to detail and precision.',
    duration: '1–4 hours',
    price: 'From $150',
  },
  {
    icon: Sparkles,
    title: 'Color & Realism',
    description: 'Vibrant colors and photorealistic artwork that comes to life on your skin.',
    duration: '4–10 hours',
    price: 'From $400',
  },
]

interface ServicesProps {
  previewOnly?: boolean
  onExploreServices?: () => void
  onBookNow?: () => void
}

export default function Services({ previewOnly = false, onExploreServices, onBookNow }: ServicesProps) {
  return (
    <div className="space-y-8 lg:space-y-12">
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center">
            <span className="text-xs font-medium text-accent tracking-wider uppercase">Our Services</span>
            <h2 className="mt-3 text-foreground">Premium Tattoo Services</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              From custom designs to complex cover-ups, we bring your vision to life with precision and artistry.
            </p>
          </div>

          {/* Services Grid & Mobile/Tablet Swipe Carousel */}
          <div className="-mx-4 px-4 flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 md:mx-0 md:px-0 md:pb-0 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 flex flex-col w-[280px] sm:w-[320px] shrink-0 snap-center md:w-auto md:shrink"
                >
                  <div className="mb-4 p-2.5 bg-accent/8 rounded-lg w-fit group-hover:bg-accent/15 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{service.description}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pt-3 border-t border-border/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent" /> {service.duration}
                    </span>
                    <span className="font-medium text-foreground">{service.price}</span>
                  </div>

                  <Button
                    onClick={onBookNow}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs h-9 border-border text-foreground hover:bg-secondary font-medium"
                  >
                    Book Consultation <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </motion.div>
              )
            })}
          </div>

          {/* Explore Services CTA */}
          {previewOnly && onExploreServices && (
            <div className="flex justify-center pt-4">
              <Button
                onClick={onExploreServices}
                variant="outline"
                className="border-border text-foreground hover:bg-secondary font-medium h-10 px-6 text-sm"
              >
                Explore Services →
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Standalone Page Additions */}
      {!previewOnly && (
        <>
          <FAQ />
          <section className="px-4 md:px-8 max-w-3xl mx-auto text-center py-6">
            <h3 className="text-lg font-serif font-bold mb-3 text-foreground">Ready to start your project?</h3>
            <Button
              onClick={onBookNow}
              className="bg-accent hover:bg-[#FF5A5F] text-white font-medium h-11 px-8 rounded-lg"
            >
              Book Consultation
            </Button>
          </section>
        </>
      )}
    </div>
  )
}
