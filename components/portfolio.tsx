'use client'

import { useState } from 'react'
import { ZoomIn, X, Clock, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CoverupSlider from './coverup-slider'

interface PortfolioProps {
  onBookNow?: () => void
}

const portfolioItems = [
  {
    id: '1',
    title: 'Geometric Sacred Mandala',
    category: 'Fine Line',
    artist: 'Marcus Reid',
    time: '4 hours',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
    desc: 'Intricate 12-point sacred geometry mandala with micro-dotwork shading on forearm.',
  },
  {
    id: '2',
    title: 'Watercolor Fluid Phoenix',
    category: 'Watercolor',
    artist: 'Sophie Laurent',
    time: '5 hours',
    image: 'https://images.unsplash.com/photo-1590246814885-568637649578?auto=format&fit=crop&w=800&q=80',
    desc: 'Vibrant fluid watercolor phoenix rising with soft color gradients and zero harsh black borders.',
  },
  {
    id: '3',
    title: 'Japanese Irezumi Dragon',
    category: 'Traditional',
    artist: 'James Chen',
    time: '8 hours',
    image: 'https://images.unsplash.com/photo-1565058380561-1250325d72f9?auto=format&fit=crop&w=800&q=80',
    desc: 'Classic Edo-period dragon sleeve featuring dynamic waves, cherry blossoms, and bold ink outlines.',
  },
  {
    id: '4',
    title: 'Minimalist Botanical Line',
    category: 'Fine Line',
    artist: 'Elena Vasquez',
    time: '2 hours',
    image: 'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=800&q=80',
    desc: 'Ultra-thin single needle anatomical flora silhouette crafted with surgical precision.',
  },
  {
    id: '5',
    title: 'Realistic Lion Portrait',
    category: 'Realism',
    artist: 'Marcus Reid',
    time: '7 hours',
    image: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&w=800&q=80',
    desc: 'Photorealistic lion portrait with smooth depth, textured mane fur, and dimensional eye contrast.',
  },
  {
    id: '6',
    title: 'Abstract Expressionist Ink',
    category: 'Contemporary',
    artist: 'Sophie Laurent',
    time: '3 hours',
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d7e4d3?auto=format&fit=crop&w=800&q=80',
    desc: 'Modern freeform abstract linework flowing ergonomically with body contours.',
  },
]

const categories = ['All', 'Fine Line', 'Realism', 'Traditional', 'Watercolor', 'Contemporary']

export default function Portfolio({ onBookNow }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeItem, setActiveItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  )

  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-4 inline-block bg-accent/10 px-4 py-1 rounded-full border border-accent/20">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Gallery of Masterpieces
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            Browse authentic custom tattoos crafted by our award-winning resident artists.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20 scale-105'
                  : 'bg-card border border-border text-foreground/70 hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-card border border-border hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 cursor-pointer"
            >
              {/* Tattoo Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient & Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-accent/80 text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase shadow">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <User className="w-3 h-3 text-accent" /> by {item.artist}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before & After Cover-Up Slider Component */}
        <CoverupSlider />

        {/* Zoom Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl max-w-xl w-full p-6 md:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 rounded-xl overflow-hidden mb-6 relative border border-accent/20">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full w-max mb-2">
                    {activeItem.category}
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-white">{activeItem.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">{activeItem.desc}</p>

                <div className="flex items-center justify-between text-xs text-foreground/60 border-y border-border py-3">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-accent" /> Artist: <strong className="text-foreground">{activeItem.artist}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-accent" /> Duration: <strong className="text-foreground">{activeItem.time}</strong>
                  </span>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={() => {
                      setActiveItem(null)
                      onBookNow?.()
                    }}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-5 rounded-lg"
                  >
                    Book This Style <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
