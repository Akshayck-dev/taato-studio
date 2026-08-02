'use client'

import { useState } from 'react'
import { ArrowRight, Clock, Star, Sparkles } from 'lucide-react'
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
    description: 'Delicate, razor-thin lines and subtle shading for elegant, intricate minimalist art. Executed with a single needle for precision.',
    features: ['Ultra-precise single needle', 'Seamless healing', 'Ideal for wrist & ribs'],
    image: '/gallery/fine_line_tattoo_1785679150868.png'
  },
  {
    id: 'black-grey',
    name: 'Custom Black & Grey',
    tag: 'Masterclass',
    artist: 'Marcus Reid',
    time: '4–8 hours',
    rating: 4.9,
    description: 'Hyper-realistic portraits, animal motifs, and smooth gradient shading with depth. A timeless aesthetic built on strong values.',
    features: ['Dimensional depth', 'Grey-scale transitions', 'Photorealistic detail'],
    image: '/gallery/realism_tattoo_1785679190624.png'
  },
  {
    id: 'irezumi',
    name: 'Japanese Irezumi',
    tag: 'Iconic',
    artist: 'James Chen',
    time: 'Full sessions',
    rating: 4.88,
    description: 'Bold linework, vibrant waves, dragons, and folklore motifs inspired by Edo masters. Authentic composition and flow.',
    features: ['Bold outlines', 'Dynamic wind/wave flow', 'Rich color saturation'],
    image: '/gallery/irezumi_tattoo_1785679177873.png'
  },
  {
    id: 'watercolor',
    name: 'Watercolor & Abstract',
    tag: 'Creative',
    artist: 'Sophie Laurent',
    time: '3–6 hours',
    rating: 4.92,
    description: 'Expressive brushstrokes, soft color splashes, and freeform compositions that break the boundary of traditional outlines.',
    features: ['No harsh borders', 'Custom color blending', 'Vibrant artistic motion'],
    image: '/gallery/watercolor_tattoo_1785679162673.png'
  },
]

export default function StyleShowcase({ onExplorePortfolio, onBookNow }: StyleShowcaseProps) {
  const [selectedStyle, setSelectedStyle] = useState(stylesData[0].id)
  const current = stylesData.find((s) => s.id === selectedStyle) || stylesData[0]

  return (
    <section className="py-6 md:py-10 lg:py-12 bg-[#0a0a0a]">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-accent/50" />
              Artistic Mastery
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              Explore Tattoo Styles.
            </h2>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              Find the perfect aesthetic for your next custom piece. Our studio houses elite specialists across all major disciplines.
            </p>
          </div>
          
          {/* Interactive Style Selector */}
          <div className="flex flex-wrap md:flex-col gap-2 md:w-64 shrink-0">
            {stylesData.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`relative text-left px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedStyle === style.id
                    ? 'text-white'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {selectedStyle === style.id && (
                  <motion.div
                    layoutId="style-active-bg"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-between">
                  {style.name}
                  {selectedStyle === style.id && <ArrowRight className="w-4 h-4 text-accent" />}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Image-Led Layout */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl min-h-[600px] lg:min-h-[700px] group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {/* Large Artwork Background */}
              <img 
                src={current.image} 
                alt={current.name} 
                className="w-full h-full object-cover opacity-60 md:opacity-80"
              />
              {/* Gradient Overlays for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent md:bg-gradient-to-r md:from-[#0a0a0a] md:via-[#0a0a0a]/80" />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 md:p-12 lg:p-20 flex flex-col justify-end md:justify-center w-full md:w-3/5 lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-accent text-[11px] font-bold uppercase tracking-widest px-3 py-1 border border-accent/30 rounded-full bg-black/40 backdrop-blur-md">
                    {current.tag}
                  </span>
                  <span className="text-white/60 text-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Est. {current.time}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-none drop-shadow-lg">
                  {current.name}
                </h3>
                
                <p className="text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-lg drop-shadow-md">
                  {current.description}
                </p>

                {/* Features & Artist Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Techniques</h4>
                    <ul className="space-y-2">
                      {current.features.map((feat, i) => (
                        <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Resident Specialist</h4>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium">{current.artist}</span>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                          <span className="text-white">{current.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed">Master specialist dedicated exclusively to this craft.</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <Button onClick={onBookNow} className="bg-accent hover:bg-[#F5C74F] text-white font-medium h-12 px-8 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 border-0">
                    Book This Style <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button onClick={onExplorePortfolio} variant="outline" className="border-white/20 text-white bg-black/40 hover:bg-white/10 backdrop-blur-md font-medium h-12 px-8 rounded-xl transition-all hover:-translate-y-0.5">
                    View Gallery
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
