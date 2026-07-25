'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, X, Check, Calendar, User, Clock, ShieldCheck, Tag } from 'lucide-react'
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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-3 md:p-6 overflow-hidden">
      {/* Widescreen Desktop Container (max-w-5xl lg:max-w-6xl) */}
      <div className="w-full max-w-5xl lg:max-w-6xl bg-card border border-border/80 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-secondary/40">
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground flex items-center gap-2">
              <span>Book Your Studio Session</span>
              <span className="text-xs font-sans bg-accent/15 text-accent border border-accent/30 px-2.5 py-0.5 rounded-full font-semibold">
                Soho Atelier
              </span>
            </h1>
            <p className="text-xs text-foreground/60 mt-0.5">
              Step {currentStep} of 7: <span className="text-accent font-semibold">{steps[currentStep - 1]}</span>
            </p>
          </div>
          {onClose && (
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-foreground/60 hover:text-foreground hover:bg-secondary rounded-full h-9 w-9"
              title="Close Booking"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </div>

        {/* Step Progress Bar across Top */}
        <div className="px-6 py-3 bg-background border-b border-border/40">
          <div className="flex items-center justify-between gap-2 max-w-4xl mx-auto">
            {steps.map((stepName, index) => {
              const isCompleted = index + 1 < currentStep
              const isCurrent = index + 1 === currentStep

              return (
                <div 
                  key={index}
                  onClick={() => {
                    if (isCompleted) setCurrentStep(index + 1)
                  }}
                  className={`flex-1 flex flex-col items-center cursor-pointer transition-all ${
                    isCompleted ? 'hover:opacity-80' : ''
                  }`}
                >
                  <div className="w-full flex items-center">
                    <div
                      className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                        isCompleted
                          ? 'bg-accent'
                          : isCurrent
                          ? 'bg-accent'
                          : 'bg-border'
                      }`}
                    />
                  </div>
                  <span className={`text-[11px] font-medium mt-1.5 hidden md:block ${
                    isCurrent ? 'text-accent font-bold' : isCompleted ? 'text-foreground/80' : 'text-foreground/40'
                  }`}>
                    {stepName}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Dual-Column Desktop Layout Body */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Left Desktop Sidebar Summary Panel */}
          <div className="hidden lg:flex lg:col-span-4 bg-secondary/30 border-r border-border/60 p-6 flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-accent" /> Appointment Summary
                </h3>
                
                <div className="bg-card border border-border/70 rounded-xl p-4 space-y-4">
                  {/* Selected Service */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                      <Tag className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-medium">Selected Service</p>
                      <p className="text-sm font-bold text-foreground">
                        {bookingData.service || 'Not Selected Yet'}
                      </p>
                    </div>
                  </div>

                  {/* Selected Artist */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-medium">Master Artist</p>
                      <p className="text-sm font-bold text-foreground">
                        {bookingData.artist || 'Any Available Artist'}
                      </p>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-medium">Session Schedule</p>
                      <p className="text-sm font-bold text-foreground">
                        {bookingData.date ? bookingData.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Select Date'}
                        {bookingData.time ? ` at ${bookingData.time}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 space-y-2 text-xs text-foreground/80">
                <div className="flex items-center gap-2 text-accent font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Ink Guarantee Included</span>
                </div>
                <ul className="space-y-1.5 pt-1 text-foreground/70">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-accent" /> Hospital-grade sterilized kit
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-accent" /> Free 90-day touch-up included
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-accent" /> Free consultation & design stencil
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40 text-[11px] text-foreground/50 text-center">
              Need assistance? Call us directly at <a href="tel:+12125550199" className="text-accent hover:underline font-semibold">(212) 555-0199</a>
            </div>
          </div>

          {/* Right Main Wizard Step Panel */}
          <div className="lg:col-span-8 p-6 overflow-y-auto flex flex-col justify-between">
            <div className="bg-secondary/20 border border-border/60 rounded-xl p-5 md:p-6 mb-6">
              {currentStep === 1 && <BookingStep1 bookingData={bookingData} setBookingData={setBookingData} />}
              {currentStep === 2 && <BookingStep2 bookingData={bookingData} setBookingData={setBookingData} />}
              {currentStep === 3 && <BookingStep3 bookingData={bookingData} setBookingData={setBookingData} />}
              {currentStep === 4 && <BookingStep4 bookingData={bookingData} setBookingData={setBookingData} />}
              {currentStep === 5 && <BookingStep5 bookingData={bookingData} setBookingData={setBookingData} />}
              {currentStep === 6 && <BookingStep6 bookingData={bookingData} setBookingData={setBookingData} />}
              {currentStep === 7 && <BookingStep7 bookingData={bookingData} />}
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center gap-4 pt-3 border-t border-border/60">
              {currentStep === 1 ? (
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="flex-1 border-border text-foreground/80 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/40 py-3 text-xs font-semibold"
                >
                  <X className="w-4 h-4 mr-1.5" />
                  Cancel Booking
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handlePrevious}
                    variant="outline"
                    className="flex-1 py-3 text-xs font-semibold"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1.5" />
                    Previous Step
                  </Button>
                </>
              )}
              <Button
                onClick={currentStep === 7 ? handleSubmit : handleNext}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-xs shadow-lg shadow-accent/20"
              >
                {currentStep === 7 ? 'Confirm & Book Appointment' : 'Next Step'}
                {currentStep !== 7 && <ArrowRight className="w-4 h-4 ml-1.5" />}
              </Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

