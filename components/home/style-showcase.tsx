'use client'

import { useState } from 'react'
import { ArrowRight, Clock, Star, Layers, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface StyleShowcaseProps {
  onExplorePortfolio: () => void
  onBookNow: () => void
}

const stylesData = [
  {
    id: 'fine-line',
    name: 'Fine Line & Micro-Realism',
    tag: 'Popular',
    artist: 'Elena Vasquez',
    time: '2 - 4 hours',
    rating: 4.95,
    description: 'Delicate, razor-thin lines and subtle shading designed for elegant, intricate minimalist art.',
    features: ['Ultra-precise single needle', 'Seamless healing', 'Ideal for inner wrist & ribs'],
    gradient: 'from-amber-950/40 via-red-950/20 to-secondary/30',
  },
  {
    id: 'black-grey',
    name: 'Custom Black & Grey Realism',
    tag: 'Masterclass',
    artist: 'Marcus Reid',
    time: '4 - 8 hours',
    rating: 4.9,
    description: 'Hyper-realistic portraits, animal motifs, and smooth gradient shading with high depth.',
    features: ['Dimensional depth', 'Smooth grey-scale transitions', 'Photorealistic detail'],
    gradient: 'from-zinc-900/60 via-stone-900/30 to-secondary/30',
  },
  {
    id: 'irezumi',
    name: 'Japanese Irezumi & Traditional',
    tag: 'Iconic',
    artist: 'James Chen',
    time: 'Full sessions',
    rating: 4.88,
    description: 'Bold linework, vibrant waves, dragons, and folklore motifs inspired by Edo-period mastery.',
    features: ['Bold outlines', 'Dynamic wind/wave flow', 'Rich enduring color saturation'],
    gradient: 'from-red-950/50 via-zinc-900/40 to-secondary/30',
  },
  {
    id: 'watercolor',
    name: 'Watercolor & Abstract Art',
    tag: 'Creative',
    artist: 'Sophie Laurent',
    time: '3 - 6 hours',
    rating: 4.92,
    description: 'Expressive brushstrokes, soft color splashes, and freeform abstract compositions.',
    features: ['No harsh borders', 'Custom color blending', 'Vibrant artistic motion'],
    gradient: 'from-rose-950/40 via-amber-950/20 to-secondary/30',
  },
]

export default function StyleShowcase({ onExplorePortfolio, onBookNow }: StyleShowcaseProps) {
  const [selectedStyle, setSelectedStyle] = useState(stylesData[0].id)

  const current = stylesData.find((s) => s.id === selectedStyle) || stylesData[0]

  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-3 inline-block bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Artistic Mastery
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-5 text-foreground">
            Explore Tattoo Styles
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            Find the perfect artistic aesthetic for your next custom tattoo piece.
          </p>
        </div>

        {/* Style Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {stylesData.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`px-5 py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                selectedStyle === style.id
                  ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20 scale-105'
                  : 'bg-card border border-border text-foreground/70 hover:text-foreground hover:border-accent/40'
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>

        {/* Selected Style Spotlight Showcase Card */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-accent/15 text-accent text-xs font-bold px-3 py-1 rounded-md uppercase border border-accent/30">
                  {current.tag}
                </span>
                <span className="text-xs text-foreground/60 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-accent" /> Est. Session: {current.time}
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-serif font-bold text-foreground">
                {current.name}
              </h3>

              <p className="text-foreground/70 text-base leading-relaxed">
                {current.description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {current.features.map((feat, i) => (
                  <div key={i} className="bg-secondary/40 border border-border/60 p-3 rounded-lg text-xs text-foreground/80 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  onClick={onBookNow}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-5 rounded-lg"
                >
                  Book This Style <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={onExplorePortfolio}
                  variant="outline"
                  className="border border-border text-foreground hover:bg-secondary font-semibold px-6 py-5 rounded-lg"
                >
                  View Full Gallery
                </Button>
              </div>
            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5">
              <div className={`rounded-xl p-8 bg-gradient-to-br ${current.gradient} border border-accent/20 relative`}>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-accent/20 rounded-xl border border-accent/30">
                    <Layers className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full border border-white/10 text-xs">
                    <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                    <span className="font-bold text-foreground">{current.rating}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">Resident Specialist</span>
                  <h4 className="text-xl font-serif font-bold text-foreground">{current.artist}</h4>
                  <p className="text-xs text-foreground/60">Top-rated specialist in {current.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
