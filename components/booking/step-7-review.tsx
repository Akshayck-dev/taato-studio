'use client'

interface BookingStep7Props {
  bookingData: any
}

export default function BookingStep7({ bookingData }: BookingStep7Props) {
  const serviceNames: { [key: string]: string } = {
    'custom-design': 'Custom Design',
    'existing-design': 'Existing Design',
    'cover-up': 'Cover-up / Rework',
  }

  const artistNames: { [key: string]: string } = {
    marcus: 'Marcus Reid',
    elena: 'Elena Vasquez',
    james: 'James Chen',
    sophie: 'Sophie Laurent',
  }

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">Review your booking</h2>

      <div className="space-y-6">
        {/* Booking Details */}
        <div className="bg-secondary/30 border border-border rounded-lg p-6 space-y-4">
          <div>
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">Service</p>
            <p className="text-lg font-semibold">{serviceNames[bookingData.service] || 'Not selected'}</p>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">Artist</p>
            <p className="text-lg font-semibold">{artistNames[bookingData.artist] || 'Not selected'}</p>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">Date</p>
            <p className="text-lg font-semibold">
              {bookingData.date
                ? bookingData.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
                : 'Not selected'}
            </p>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">Time</p>
            <p className="text-lg font-semibold">{bookingData.time || 'Not selected'}</p>
          </div>
        </div>

        {/* Design Details */}
        <div className="bg-secondary/30 border border-border rounded-lg p-6">
          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-3">Design Description</p>
          <p className="text-foreground/80">{bookingData.details || 'No description provided'}</p>
        </div>

        {/* Contact Info */}
        <div className="bg-secondary/30 border border-border rounded-lg p-6 space-y-3">
          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-3">Contact Information</p>
          <div>
            <p className="text-xs text-foreground/60">Name</p>
            <p className="font-semibold">{bookingData.name || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/60">Email</p>
            <p className="font-semibold">{bookingData.email || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/60">Phone</p>
            <p className="font-semibold">{bookingData.phone || 'Not provided'}</p>
          </div>
        </div>

        {/* Confirmation Message */}
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
          <p className="text-sm text-foreground/80">
            By clicking "Complete Booking", you agree to our terms and conditions. A confirmation email will be sent to you shortly.
          </p>
        </div>
      </div>
    </div>
  )
}
