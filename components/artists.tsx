'use client'

import { Star } from 'lucide-react'

const artists = [
  {
    id: '1',
    name: 'Marcus Reid',
    specialty: 'Custom Design & Realism',
    experience: '12 years experience',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=600&q=80',
    tag: 'Lead Realism Artist',
  },
  {
    id: '2',
    name: 'Elena Vasquez',
    specialty: 'Fine Line & Minimalist',
    experience: '8 years experience',
    rating: 4.95,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80',
    tag: 'Micro-Detail Specialist',
  },
  {
    id: '3',
    name: 'James Chen',
    specialty: 'Japanese & Traditional',
    experience: '15 years experience',
    rating: 4.88,
    reviews: 154,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    tag: 'Irezumi Master',
  },
  {
    id: '4',
    name: 'Sophie Laurent',
    specialty: 'Watercolor & Abstract',
    experience: '6 years experience',
    rating: 4.92,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    tag: 'Color Blend Specialist',
  },
]

export default function Artists() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-4 inline-block bg-accent/10 px-4 py-1 rounded-full border border-accent/20">
            Our Talented Team
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Master Tattoo Artists
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            Each artist brings unique expertise and a passion for creating extraordinary tattoos.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="bg-card border border-border rounded-xl p-4 md:p-5 hover:border-accent/60 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/10 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden mb-4 bg-secondary">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-accent text-[11px] font-bold px-2.5 py-1 rounded border border-white/10 uppercase">
                    {artist.tag}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {artist.name}
                </h3>
                <p className="text-xs font-semibold text-accent mb-1">{artist.specialty}</p>
                <p className="text-xs text-foreground/50 mb-3">{artist.experience}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/60">
                <div className="flex items-center gap-1 text-accent text-xs font-bold">
                  <Star className="w-4 h-4 fill-accent" />
                  <span>{artist.rating}</span>
                </div>
                <span className="text-xs text-foreground/50">({artist.reviews} reviews)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
