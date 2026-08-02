'use client'

import { useState } from 'react'
import { X, Calendar, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/contexts/booking-context'

interface BookingPageProps {
  onClose?: () => void
}

export default function BookingPage({ onClose }: BookingPageProps) {
  const { addBooking } = useBooking()
  const [bookingData, setBookingData] = useState({
    service: 'Custom Design',
    artist: 'Any Available Artist',
    date: '',
    time: '10:00',
    details: '',
    name: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    addBooking({
      clientName: bookingData.name || 'Client',
      email: bookingData.email || 'client@example.com',
      phone: bookingData.phone || '+1 (555) 000-0000',
      service: bookingData.service,
      artist: bookingData.artist,
      date: bookingData.date || new Date().toISOString().split('T')[0],
      time: bookingData.time || '10:00 AM',
      depositStatus: 'Pending',
      status: 'Pending',
      placement: 'Requested Placement',
      size: bookingData.details || 'Custom Size',
    })
    
    alert("Thank you! Your appointment has been sent directly to the studio admin.")
    if (onClose) {
      onClose()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 md:p-6 overflow-hidden">
      <div className="w-full max-w-2xl bg-card border border-border/80 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-secondary/40">
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground">
              Book Your Studio Session
            </h1>
            <p className="text-xs text-foreground/60 mt-0.5">
              Fill out the form below to request an appointment.
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

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Service Required</label>
                <div className="relative">
                  <select 
                    name="service"
                    value={bookingData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-4 py-2 bg-background border border-border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="Custom Design">Custom Design</option>
                    <option value="Existing Design">Existing Design</option>
                    <option value="Cover-up / Rework">Cover-up / Rework</option>
                  </select>
                </div>
              </div>

              {/* Artist Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Preferred Artist</label>
                <div className="relative">
                  <select 
                    name="artist"
                    value={bookingData.artist}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-4 py-2 bg-background border border-border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="Any Available Artist">Any Available Artist</option>
                    <option value="Elena Vasquez">Elena Vasquez (Realism)</option>
                    <option value="Marcus Chen">Marcus Chen (Geometric)</option>
                    <option value="Sarah Jenkins">Sarah Jenkins (Traditional)</option>
                    <option value="David Wu">David Wu (Japanese)</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleChange}
                    required
                    className="w-full h-11 pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                  <input
                    type="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleChange}
                    required
                    className="w-full h-11 pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={bookingData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={bookingData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={bookingData.email}
                onChange={handleChange}
                required
                className="w-full h-11 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>

            {/* Details */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Tattoo Details (Placement, Size, Ideas)</label>
              <textarea
                name="details"
                placeholder="Describe what you're looking for..."
                value={bookingData.details}
                onChange={handleChange}
                rows={3}
                className="w-full p-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border/60 bg-secondary/20 flex justify-end">
          <Button
            type="submit"
            form="booking-form"
            className="w-full md:w-auto bg-accent hover:bg-[#F5C74F] text-white font-medium h-12 px-8 rounded-xl"
          >
            Submit Request
            <Send className="w-4 h-4 ml-2" />
          </Button>
        </div>

      </div>
    </div>
  )
}
