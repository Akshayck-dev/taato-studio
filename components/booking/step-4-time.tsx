'use client'

const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
]

interface BookingStep4Props {
  bookingData: any
  setBookingData: (data: any) => void
}

export default function BookingStep4({ bookingData, setBookingData }: BookingStep4Props) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Choose your time</h2>
      <p className="text-foreground/60 mb-6">
        {bookingData.date ? bookingData.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ''}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => setBookingData({ ...bookingData, time })}
            className={`p-3 rounded-lg border-2 transition-all font-semibold ${
              bookingData.time === time
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border hover:border-accent/50 hover:bg-secondary/50'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  )
}
