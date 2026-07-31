'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface BookingRecord {
  id: string
  clientName: string
  email: string
  phone: string
  service: string
  artist: string
  date: string
  time: string
  depositStatus: 'Paid' | 'Pending' | 'Refunded'
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled'
  placement: string
  size: string
}

const initialMockBookings: BookingRecord[] = [
  {
    id: 'BK-1082',
    clientName: 'Emily Carter',
    email: 'emily.c@example.com',
    phone: '+1 (555) 234-5678',
    service: 'Fine Line & Detail',
    artist: 'Elena Vasquez',
    date: '2026-07-27',
    time: '02:00 PM',
    depositStatus: 'Paid',
    status: 'Confirmed',
    placement: 'Inner Forearm',
    size: '3" x 4"',
  },
  {
    id: 'BK-1083',
    clientName: 'Marcus Miller',
    email: 'marcus.m@example.com',
    phone: '+1 (555) 876-5432',
    service: 'Custom Design',
    artist: 'Marcus Reid',
    date: '2026-07-28',
    time: '11:00 AM',
    depositStatus: 'Pending',
    status: 'Pending',
    placement: 'Upper Arm Sleeve',
    size: '6" x 8"',
  },
  {
    id: 'BK-1084',
    clientName: 'Sophia Chen',
    email: 'sophia.c@example.com',
    phone: '+1 (555) 345-6789',
    service: 'Color & Realism',
    artist: 'Sophie Laurent',
    date: '2026-07-29',
    time: '04:30 PM',
    depositStatus: 'Paid',
    status: 'Confirmed',
    placement: 'Shoulder Blade',
    size: '5" x 5"',
  },
]

interface BookingContextType {
  selectedDate: Date | null
  setSelectedDate: (date: Date | null) => void
  selectedTime: string | null
  setSelectedTime: (time: string | null) => void
  selectedArtist: string | null
  setSelectedArtist: (artist: string | null) => void
  selectedService: string | null
  setSelectedService: (service: string | null) => void
  bookings: BookingRecord[]
  addBooking: (newBooking: Omit<BookingRecord, 'id'>) => void
  updateBookingStatus: (id: string, status: BookingRecord['status'], depositStatus?: BookingRecord['depositStatus']) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [bookings, setBookings] = useState<BookingRecord[]>(initialMockBookings)

  // Load from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tattoo_studio_bookings')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setBookings(parsed)
        }
      }
    } catch (e) {
      console.warn('LocalStorage error:', e)
    }
  }, [])

  const saveToStorage = (updatedList: BookingRecord[]) => {
    setBookings(updatedList)
    try {
      localStorage.setItem('tattoo_studio_bookings', JSON.stringify(updatedList))
    } catch (e) {
      console.warn('LocalStorage error:', e)
    }
  }

  const addBooking = (newBooking: Omit<BookingRecord, 'id'>) => {
    const bookingRecord: BookingRecord = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      ...newBooking,
    }
    const updated = [bookingRecord, ...bookings]
    saveToStorage(updated)
  }

  const updateBookingStatus = (
    id: string,
    status: BookingRecord['status'],
    depositStatus?: BookingRecord['depositStatus']
  ) => {
    const updated = bookings.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status,
          depositStatus: depositStatus || item.depositStatus,
        }
      }
      return item
    })
    saveToStorage(updated)
  }

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
        bookings,
        addBooking,
        updateBookingStatus,
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
