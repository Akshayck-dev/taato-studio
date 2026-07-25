'use client'

import { Zap, Palette, Heart, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Collaborate with our artists to create a unique design that tells your story.',
  },
  {
    icon: Zap,
    title: 'Cover-ups & Reworks',
    description: 'Transform existing tattoos into something you truly love.',
  },
  {
    icon: Heart,
    title: 'Fine Line & Detail',
    description: 'Intricate designs with meticulous attention to detail and precision.',
  },
  {
    icon: Sparkles,
    title: 'Color & Realism',
    description: 'Vibrant colors and photorealistic artwork that comes to life on your skin.',
  },
]

export default function Services() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Premium Tattoo Services
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            From custom designs to complex cover-ups, we specialize in bringing your vision to life with precision and artistry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="group bg-card border border-border rounded-lg p-6 md:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
