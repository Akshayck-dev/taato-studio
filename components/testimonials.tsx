'use client'

import { Star, CheckCircle } from 'lucide-react'

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
    text: "Elena's micro-realism line work is incredible. The precision and gentle technique made the entire session comfortable. I couldn't be happier!",
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
]

export default function Testimonials() {
  return (
    <section className="px-4 md:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Client Reviews</span>
          <h2 className="mt-3 text-foreground">Stories Written in Ink</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Authentic reviews from clients who trusted our master artists.
          </p>
        </div>

        {/* Automatically Scrolling Testimonial Cards */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="flex gap-5 animate-marquee">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-5 md:p-6 w-[280px] md:w-[340px] flex-shrink-0 flex flex-col justify-between whitespace-normal"
              >
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-3.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs md:text-sm font-serif italic text-foreground/90 leading-relaxed mb-5">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-border/50">
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent border border-accent/20 flex items-center justify-center font-semibold text-[10px] flex-shrink-0">
                    {item.avatar}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground text-xs truncate">{item.name}</h4>
                    <p className="text-[9px] text-muted-foreground flex items-center gap-0.5 mt-0.5 truncate">
                      <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" /> {item.tag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
