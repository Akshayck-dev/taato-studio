'use client'

const artists = [
  {
    id: 'marcus',
    name: 'Marcus Reid',
    specialty: 'Custom Design & Realism',
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 'elena',
    name: 'Elena Vasquez',
    specialty: 'Fine Line & Minimalist',
    rating: 4.95,
    reviews: 98,
  },
  {
    id: 'james',
    name: 'James Chen',
    specialty: 'Japanese & Traditional',
    rating: 4.88,
    reviews: 154,
  },
  {
    id: 'sophie',
    name: 'Sophie Laurent',
    specialty: 'Watercolor & Abstract',
    rating: 4.92,
    reviews: 76,
  },
]

interface BookingStep2Props {
  bookingData: any
  setBookingData: (data: any) => void
}

export default function BookingStep2({ bookingData, setBookingData }: BookingStep2Props) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">Choose your artist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {artists.map((artist) => (
          <button
            key={artist.id}
            onClick={() => setBookingData({ ...bookingData, artist: artist.id })}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              bookingData.artist === artist.id
                ? 'border-accent bg-accent/10'
                : 'border-border hover:border-accent/50'
            }`}
          >
            <h3 className="font-semibold mb-1">{artist.name}</h3>
            <p className="text-xs md:text-sm text-accent font-semibold mb-2">{artist.specialty}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-accent">{artist.rating}</span>
              <span className="text-xs text-foreground/50">({artist.reviews})</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
