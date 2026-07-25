'use client'

interface BookingStep6Props {
  bookingData: any
  setBookingData: (data: any) => void
}

export default function BookingStep6({ bookingData, setBookingData }: BookingStep6Props) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">Your contact information</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name *</label>
          <input
            type="text"
            value={bookingData.name}
            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
            className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email *</label>
          <input
            type="email"
            value={bookingData.email}
            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
            className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Phone *</label>
          <input
            type="tel"
            value={bookingData.phone}
            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
            className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="bg-secondary/50 border border-border rounded-lg p-4">
          <p className="text-sm text-foreground/70">
            We&apos;ll use this information to confirm your booking and send you appointment details. We won&apos;t share your information with anyone.
          </p>
        </div>
      </div>
    </div>
  )
}
