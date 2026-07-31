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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4 border border-accent/20">
            Artistic Mastery
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Explore Tattoo Styles</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-base">
            Find the perfect artistic aesthetic for your next custom piece.
          </p>
        </div>

        {/* Style Tabs — Pill style */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {stylesData.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedStyle === style.id
                  ? 'text-white shadow-md shadow-accent/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
            >
              {selectedStyle === style.id && (
                <motion.div
                  layoutId="style-pill"
                  className="absolute inset-0 bg-accent rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{style.name}</span>
            </button>
          ))}
        </div>

        {/* Showcase Card */}
        <div className="relative group">
          {/* Subtle background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/5 via-accent/10 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-card border border-border/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-accent/20">
                      {current.tag}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-accent/80" /> Est. {current.time}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">{current.name}</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{current.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {current.features.map((feat, i) => (
                      <div key={i} className="bg-secondary/50 p-4 rounded-2xl text-xs md:text-sm text-foreground/80 font-medium flex flex-col gap-2 border border-border/40 hover:border-accent/30 transition-colors">
                        <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <Button onClick={onBookNow} className="bg-accent hover:bg-[#FF5A5F] text-white font-medium h-12 px-8 rounded-xl shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5">
                      Book This Style <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button onClick={onExplorePortfolio} variant="outline" className="border-border text-foreground hover:bg-secondary font-medium h-12 px-8 rounded-xl transition-all hover:-translate-y-0.5">
                      View Gallery
                    </Button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="lg:col-span-5 h-full">
                  <div className="h-full rounded-2xl p-8 bg-gradient-to-br from-secondary via-card to-secondary/50 border border-border/60 flex flex-col justify-between min-h-[300px] relative overflow-hidden group-hover:border-accent/30 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20" />
                    
                    <div className="flex justify-between items-start relative z-10">
                      <div className="p-4 bg-background rounded-2xl border border-border/80 shadow-sm">
                        <Layers className="w-7 h-7 text-accent" />
                      </div>
                      <div className="flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-full border border-border/80 shadow-sm text-sm">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="font-bold text-foreground">{current.rating}</span>
                      </div>
                    </div>
                    
                    <div className="relative z-10 pt-12">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">Resident Specialist</span>
                      <h4 className="text-2xl font-serif font-bold text-foreground mb-2">{current.artist}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">Top-rated master specialist dedicated exclusively to the {current.name} craft.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
