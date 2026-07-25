'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle, LayoutGrid, Sliders } from 'lucide-react'

export interface Testimonial {
  id: string
  name: string
  role: string
  tag: string
  artist: string
  rating: number
  avatar: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'Verified Client',
    tag: 'Custom Black & Grey Sleeve',
    artist: 'Marcus Reid',
    rating: 5,
    avatar: 'AT',
    text: 'Ink Collective turned my rough idea into an absolute masterpiece. Marcus understood my vision perfectly and delivered line depth beyond my expectations!',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    role: 'Verified Client',
    tag: 'Fine Line Floral Ribs',
    artist: 'Elena Vasquez',
    rating: 5,
    avatar: 'SM',
    text: 'Elena\'s micro-realism line work is incredible. The precision and gentle technique made the entire session comfortable. I couldn\'t be happier!',
  },
  {
    id: '3',
    name: 'David Park',
    role: 'Verified Client',
    tag: 'Japanese Irezumi Backpiece',
    artist: 'James Chen',
    rating: 5,
    avatar: 'DP',
    text: 'This is my third piece from Ink Collective and they never cease to amaze me. Professional sterile setup, creative genius, and worth every dollar.',
  },
  {
    id: '4',
    name: 'Chloe Bennett',
    role: 'Verified Client',
    tag: 'Watercolor Abstract Shoulder',
    artist: 'Sophie Laurent',
    rating: 5,
    avatar: 'CB',
    text: 'The vibrant color blending Sophie achieved on my arm is stunning. People stop me on the street every week asking where I got it done!',
  },
  {
    id: '5',
    name: 'Michael Vance',
    role: 'Verified Client',
    tag: 'Geometric Chest Piece',
    artist: 'Marcus Reid',
    rating: 5,
    avatar: 'MV',
    text: 'From the initial virtual stencil consultation to the 90-day aftercare check-in, the entire experience was 5-star perfection.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')

  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'carousel') return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, viewMode])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-secondary/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with Style Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-semibold text-accent tracking-widest uppercase mb-2 inline-block bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
              Client Reviews
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Stories Written in Ink
            </h2>
            <p className="text-xs md:text-sm text-foreground/60 max-w-lg">
              Read authentic reviews from clients who trusted our master artists.
            </p>
          </div>

          {/* Style Switcher Mode Buttons */}
          <div className="flex items-center gap-1 bg-card border border-border p-1 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                viewMode === 'carousel'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> Carousel Mode
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Grid View
            </button>
          </div>
        </div>

        {/* Moving Ticker Marquee Bar */}
        <div className="mb-6 overflow-hidden bg-card/60 border border-border/80 rounded-full py-2">
          <div className="flex whitespace-nowrap animate-marquee gap-6 text-[11px] font-semibold text-foreground/70 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Star className="w-3 h-3 text-accent fill-accent" /> 5.0 Star Rating Across 1,200+ Reviews
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-accent" /> 100% Sterile & Certified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-3 h-3 text-accent fill-accent" /> Award-Winning Resident Artists
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-accent" /> Free 90-Day Touch-Up Guarantee
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-3 h-3 text-accent fill-accent" /> 5.0 Star Rating Across 1,200+ Reviews
            </span>
          </div>
        </div>

        {/* CAROUSEL MODE */}
        {viewMode === 'carousel' && (
          <div
            className="relative bg-card border border-border rounded-xl p-5 md:p-6 shadow-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Quote className="w-7 h-7 text-accent/20 absolute top-4 right-4 pointer-events-none" />

            {/* Testimonial Content Transition */}
            <div className="min-h-[140px] flex flex-col justify-between transition-all duration-300">
              <div>
                {/* Rating & Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 bg-accent/10 text-accent text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-accent/20">
                    <span>{testimonials[currentIndex].tag}</span>
                    <span>•</span>
                    <span>by {testimonials[currentIndex].artist}</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base font-serif italic text-foreground/90 leading-relaxed mb-4">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-3 border-t border-border/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/20 text-accent border border-accent/30 flex items-center justify-center font-bold font-serif text-xs">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xs md:text-sm">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[11px] text-foreground/50 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-accent" /> {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-full bg-secondary border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all text-xs"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-full bg-secondary border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all text-xs"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-accent' : 'w-1.5 bg-border hover:bg-foreground/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* GRID VIEW MODE */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm font-serif italic text-foreground/90 leading-relaxed mb-4">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-border/60">
                  <div className="w-7 h-7 rounded-full bg-accent/20 text-accent border border-accent/30 flex items-center justify-center font-bold font-serif text-[11px]">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xs">{item.name}</h4>
                    <p className="text-[10px] text-foreground/50">by {item.artist}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
