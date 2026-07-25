'use client'

const services = [
  {
    id: 'custom-design',
    name: 'Custom Design',
    description: 'Work with our artist to create an original design',
    price: '$350+',
  },
  {
    id: 'existing-design',
    name: 'Existing Design',
    description: 'Bring your own artwork or image',
    price: '$200+',
  },
  {
    id: 'cover-up',
    name: 'Cover-up / Rework',
    description: 'Transform an existing tattoo',
    price: '$300+',
  },
]

interface BookingStep1Props {
  bookingData: any
  setBookingData: (data: any) => void
}

export default function BookingStep1({ bookingData, setBookingData }: BookingStep1Props) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">What type of tattoo would you like?</h2>

      <div className="space-y-3">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setBookingData({ ...bookingData, service: service.id })}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left flex justify-between items-start ${
              bookingData.service === service.id
                ? 'border-accent bg-accent/10'
                : 'border-border hover:border-accent/50'
            }`}
          >
            <div>
              <h3 className="font-semibold mb-1">{service.name}</h3>
              <p className="text-sm text-foreground/60">{service.description}</p>
            </div>
            <span className="text-accent font-semibold flex-shrink-0 ml-4">{service.price}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
