'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BookingStep1 from './step-1-service'
import BookingStep2 from './step-2-artist'
import BookingStep3 from './step-3-date'
import BookingStep4 from './step-4-time'
import BookingStep5 from './step-5-details'
import BookingStep6 from './step-6-contact'
import BookingStep7 from './step-7-review'

interface BookingPageProps {
  onClose?: () => void
}

export default function BookingPage({ onClose }: BookingPageProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: '',
    artist: '',
    date: null as Date | null,
    time: '',
    details: '',
    name: '',
    email: '',
    phone: '',
  })

  const steps = [
    'Service',
    'Artist',
    'Date',
    'Time',
    'Details',
    'Contact',
    'Review',
  ]

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Booking submitted:', bookingData)
    alert('Thank you! We\'ll confirm your appointment soon.')
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-hidden">
      <div className="w-full max-w-2xl bg-card border border-border rounded-2xl p-5 md:p-6 shadow-2xl flex flex-col justify-between max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-border/60 mb-3">
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground">Book Your Tattoo</h1>
            <p className="text-xs text-foreground/60">Step {currentStep} of 7: <span className="text-accent font-semibold">{steps[currentStep - 1]}</span></p>
          </div>
          {onClose && (
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-foreground/60 hover:text-foreground hover:bg-secondary rounded-full h-8 w-8"
              title="Close Booking"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </div>

        {/* Compact Progress Bar */}
        <div className="mb-4">
          <div className="flex gap-1.5">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1.5 rounded-full transition-colors ${
                  index < currentStep
                    ? 'bg-accent'
                    : index === currentStep - 1
                    ? 'bg-accent/50'
                    : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrollable Step Content Container (Fits in Screen) */}
        <div className="flex-1 overflow-y-auto pr-1 mb-4 space-y-4">
          <div className="bg-secondary/30 border border-border/60 rounded-xl p-4 md:p-5">
            {currentStep === 1 && <BookingStep1 bookingData={bookingData} setBookingData={setBookingData} />}
            {currentStep === 2 && <BookingStep2 bookingData={bookingData} setBookingData={setBookingData} />}
            {currentStep === 3 && <BookingStep3 bookingData={bookingData} setBookingData={setBookingData} />}
            {currentStep === 4 && <BookingStep4 bookingData={bookingData} setBookingData={setBookingData} />}
            {currentStep === 5 && <BookingStep5 bookingData={bookingData} setBookingData={setBookingData} />}
            {currentStep === 6 && <BookingStep6 bookingData={bookingData} setBookingData={setBookingData} />}
            {currentStep === 7 && <BookingStep7 bookingData={bookingData} />}
          </div>
        </div>

        {/* Bottom Navigation Actions */}
        <div className="flex items-center gap-3 pt-3 border-t border-border/60">
          {currentStep === 1 ? (
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-border text-foreground/80 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/40 py-2.5 text-xs font-semibold"
            >
              <X className="w-4 h-4 mr-1.5" />
              Cancel Booking
            </Button>
          ) : (
            <>
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="flex-1 py-2.5 text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Previous Step
              </Button>
              {onClose && (
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="text-foreground/60 hover:text-destructive hover:bg-destructive/10 py-2.5 text-xs"
                >
                  <X className="w-4 h-4 mr-1" />
                  Cancel
                </Button>
              )}
            </>
          )}
          <Button
            onClick={currentStep === 7 ? handleSubmit : handleNext}
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2.5 text-xs"
          >
            {currentStep === 7 ? 'Complete Booking' : 'Next Step'}
            {currentStep !== 7 && <ArrowRight className="w-4 h-4 ml-1.5" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
