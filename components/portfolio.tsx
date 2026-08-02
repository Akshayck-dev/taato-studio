'use client'

import { useState } from 'react'
import { ZoomIn, X, Clock, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import CoverupSlider from './coverup-slider'

interface PortfolioProps {
  onBookNow?: () => void
  previewOnly?: boolean
  onViewFullGallery?: () => void
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
    desc: 'Photorealistic lion portrait with smooth depth, textured theme fur, and dimensional eye contrast.',
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

export default function Portfolio({ onBookNow, previewOnly = false, onViewFullGallery }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeItem, setActiveItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = portfolioItems.filter(
    (item) => previewOnly || selectedCategory === 'All' || item.category === selectedCategory
  )

  const displayedItems = previewOnly ? filteredItems.slice(0, 4) : filteredItems

  return (
    <section className="px-4 md:px-8 py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Our Portfolio</span>
          <h2 className="mt-3 text-foreground">Gallery of Masterpieces</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Browse authentic custom tattoos crafted by our award-winning resident artists.
          </p>
        </div>

        {/* Filter Tabs - Hide on preview mode */}
        {!previewOnly && (
          <div className="flex flex-wrap justify-center gap-1 border-b border-border/30 pb-px">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2.5 text-xs md:text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.span
                    layoutId="portfolio-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid & Mobile/Tablet Touch Swipe Carousel */}
        <motion.div layout className={`-mx-4 px-4 flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:grid md:grid-cols-2 ${previewOnly ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} md:mx-0 md:px-0 md:pb-0 gap-5`}>
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative overflow-hidden rounded-xl aspect-square bg-card border border-border hover:border-accent/30 transition-all duration-300 cursor-pointer w-[260px] sm:w-[300px] shrink-0 snap-center md:w-auto md:shrink"
              >
                {/* Tattoo Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-accent/80 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-serif font-bold text-white mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-white/70 flex items-center gap-1">
                      <User className="w-3 h-3 text-accent" /> by {item.artist}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Gallery CTA */}
        {previewOnly && onViewFullGallery && (
          <div className="flex justify-center pt-4">
            <Button
              onClick={onViewFullGallery}
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-medium h-10 px-6 text-sm"
            >
              View Full Gallery →
            </Button>
          </div>
        )}

        {/* Before & After Cover-Up Slider Component - Hide on preview mode */}
        {!previewOnly && <CoverupSlider />}

        {/* Zoom Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-card border border-border rounded-xl max-w-xl w-full p-5 relative shadow-2xl"
              >
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent/15 transition-all z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="h-64 md:h-72 rounded-lg overflow-hidden mb-5 relative border border-border">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 flex flex-col justify-end">
                    <span className="bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded w-max mb-1.5">
                      {activeItem.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white">{activeItem.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{activeItem.desc}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground border-y border-border/50 py-2.5">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-accent" /> Artist: <strong className="text-foreground font-medium">{activeItem.artist}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent" /> Duration: <strong className="text-foreground font-medium">{activeItem.time}</strong>
                    </span>
                  </div>

                  <div className="pt-1 flex gap-2">
                    <Button
                      onClick={() => {
                        setActiveItem(null)
                        onBookNow?.()
                      }}
                      className="flex-grow bg-accent hover:bg-[#FF5A5F] text-white font-medium h-10 px-5 text-sm"
                    >
                      Book This Style <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                    <ShareButton item={activeItem} />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ShareButton({ item }: { item: typeof portfolioItems[0] | null }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (!item) return
    const shareText = `Check out this amazing "${item.title}" tattoo by ${item.artist} at Ink Collective!`
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/?artwork=${item.id}` : ''

    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: shareText,
          url: shareUrl,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy text:', err)
      }
    }
  }

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className="border-border text-foreground hover:bg-secondary font-medium h-10 px-4 text-sm flex items-center gap-1.5 min-w-[90px] justify-center transition-colors"
    >
      {copied ? (
        'Copied!'
      ) : (
        <>
          <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />
          </svg>
          Share
        </>
      )}
    </Button>
  )
}
