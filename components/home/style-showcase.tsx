'use client'

import { useState } from 'react'
import { ArrowRight, Clock, Star, Layers, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

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
    time: '2–4 hours',
    rating: 4.95,
    description: 'Delicate, razor-thin lines and subtle shading for elegant, intricate minimalist art.',
    features: ['Ultra-precise single needle', 'Seamless healing', 'Ideal for wrist & ribs'],
  },
  {
    id: 'black-grey',
    name: 'Custom Black & Grey',
    tag: 'Masterclass',
    artist: 'Marcus Reid',
    time: '4–8 hours',
    rating: 4.9,
    description: 'Hyper-realistic portraits, animal motifs, and smooth gradient shading with depth.',
    features: ['Dimensional depth', 'Grey-scale transitions', 'Photorealistic detail'],
  },
  {
    id: 'irezumi',
    name: 'Japanese Irezumi',
    tag: 'Iconic',
    artist: 'James Chen',
    time: 'Full sessions',
    rating: 4.88,
    description: 'Bold linework, vibrant waves, dragons, and folklore motifs inspired by Edo masters.',
    features: ['Bold outlines', 'Dynamic wind/wave flow', 'Rich color saturation'],
  },
  {
    id: 'watercolor',
    name: 'Watercolor & Abstract',
    tag: 'Creative',
    artist: 'Sophie Laurent',
    time: '3–6 hours',
    rating: 4.92,
    description: 'Expressive brushstrokes, soft color splashes, and freeform compositions.',
    features: ['No harsh borders', 'Custom color blending', 'Vibrant artistic motion'],
  },
]

export default function StyleShowcase({ onExplorePortfolio, onBookNow }: StyleShowcaseProps) {
  const [selectedStyle, setSelectedStyle] = useState(stylesData[0].id)
  const current = stylesData.find((s) => s.id === selectedStyle) || stylesData[0]

  return (
    <section className="px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Artistic Mastery</span>
          <h2 className="mt-3 text-foreground">Explore Tattoo Styles</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Find the perfect artistic aesthetic for your next custom piece.
          </p>
        </div>

        {/* Style Tabs — underline style */}
        <div className="flex flex-wrap justify-center gap-1 mb-10 border-b border-border/30 pb-px">
          {stylesData.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                selectedStyle === style.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {style.name}
              {selectedStyle === style.id && (
                <motion.span
                  layoutId="style-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="bg-accent/10 text-accent text-xs font-medium px-2.5 py-1 rounded-md border border-accent/15">
                    {current.tag}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-accent" /> Est. {current.time}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">{current.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{current.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {current.features.map((feat, i) => (
                    <div key={i} className="bg-secondary/30 border border-border/40 p-3 rounded-lg text-xs text-muted-foreground flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-3">
                  <Button onClick={onBookNow} className="bg-accent hover:bg-[#FF5A5F] text-white font-medium h-10 px-5 text-sm">
                    Book This Style <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button onClick={onExplorePortfolio} variant="outline" className="border-border text-foreground hover:bg-secondary font-medium h-10 px-5 text-sm">
                    View Gallery
                  </Button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="lg:col-span-5">
                <div className="rounded-xl p-6 bg-secondary/20 border border-border/50 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 bg-accent/10 rounded-lg border border-accent/20">
                      <Layers className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex items-center gap-1 bg-card px-2.5 py-1 rounded-full border border-border text-xs">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      <span className="font-medium text-foreground">{current.rating}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-medium">Resident Specialist</span>
                    <h4 className="text-lg font-serif font-bold text-foreground mt-0.5">{current.artist}</h4>
                    <p className="text-xs text-muted-foreground mt-1">Top-rated specialist in {current.name}</p>
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
