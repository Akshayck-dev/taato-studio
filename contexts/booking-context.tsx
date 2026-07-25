'use client'

import React, { createContext, useContext, useState } from 'react'

interface BookingContextType {
  selectedDate: Date | null
  setSelectedDate: (date: Date | null) => void
  selectedTime: string | null
  setSelectedTime: (time: string | null) => void
  selectedArtist: string | null
  setSelectedArtist: (artist: string | null) => void
  selectedService: string | null
  setSelectedService: (service: string | null) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <BookingContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        selectedArtist,
        setSelectedArtist,
        selectedService,
        setSelectedService,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
