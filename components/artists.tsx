'use client'

import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const artists = [
  {
    id: '1',
    name: 'Marcus Reid',
    specialty: 'Custom Design & Realism',
    experience: '12 years',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=600&q=80',
    instagram: '@marcus.reid.ink',
  },
  {
    id: '2',
    name: 'Elena Vasquez',
    specialty: 'Fine Line & Minimalist',
    experience: '8 years',
    rating: 4.95,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80',
    instagram: '@elena.v.tattoo',
  },
  {
    id: '3',
    name: 'James Chen',
    specialty: 'Japanese & Traditional',
    experience: '15 years',
    rating: 4.88,
    reviews: 154,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    instagram: '@jameschen.irezumi',
  },
  {
    id: '4',
    name: 'Sophie Laurent',
    specialty: 'Watercolor & Abstract',
    experience: '6 years',
    rating: 4.92,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    instagram: '@sophie.laurent.art',
  },
]

interface ArtistsProps {
  previewOnly?: boolean
  onViewAllArtists?: () => void
  onBookNow?: () => void
}

export default function Artists({ previewOnly = false, onViewAllArtists, onBookNow }: ArtistsProps) {
  const displayedArtists = previewOnly ? artists.slice(0, 3) : artists

  return (
    <section className="px-4 md:px-8 py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Meet the Team</span>
          <h2 className="mt-3 text-foreground">Master Tattoo Artists</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Each artist brings unique expertise and a passion for creating extraordinary tattoos.
          </p>
        </div>

        {/* Artists Grid & Mobile/Tablet Touch Swipe Carousel */}
        <div className={`-mx-4 px-4 flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:grid md:mx-0 md:px-0 md:pb-0 gap-5 ${previewOnly ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {displayedArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 w-[260px] sm:w-[300px] shrink-0 snap-center md:w-auto md:shrink"
            >
              {/* Image with hover overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Hover action overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={onBookNow}
                    size="sm"
                    className="bg-accent hover:bg-[#FF5A5F] text-white text-xs h-8 px-4 font-semibold"
                  >
                    Book Session
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground">{artist.name}</h3>
                <p className="text-xs text-accent font-medium mt-0.5">{artist.specialty}</p>
                <p className="text-xs text-muted-foreground mt-1">{artist.experience} experience</p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                    <span className="font-medium text-foreground">{artist.rating}</span>
                    <span className="text-muted-foreground">({artist.reviews})</span>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Meet All Artists CTA */}
        {previewOnly && onViewAllArtists && (
          <div className="flex justify-center pt-4">
            <Button
              onClick={onViewAllArtists}
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-medium h-10 px-6 text-sm"
            >
              Meet All Artists →
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
