'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BookingStep3Props {
  bookingData: any
  setBookingData: (data: any) => void
}

export default function BookingStep3({ bookingData, setBookingData }: BookingStep3Props) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i))
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const isDateAvailable = (date: Date) => {
    const today = new Date()
    return date > today
  }

  const isDateSelected = (date: Date | null) => {
    if (!date || !bookingData.date) return false
    return date.toDateString() === bookingData.date.toDateString()
  }

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">Choose your date</h2>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-secondary rounded transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-semibold">{monthName}</h3>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-secondary rounded transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="space-y-4">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-foreground/60">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const isAvailable = day && isDateAvailable(day)
            const isSelected = isDateSelected(day)

            return (
              <button
                key={index}
                onClick={() => {
                  if (isAvailable) {
                    setBookingData({ ...bookingData, date: day })
                  }
                }}
                disabled={!isAvailable}
                className={`aspect-square rounded flex items-center justify-center text-sm font-semibold transition-all ${
                  !day || !isAvailable
                    ? 'text-foreground/30 cursor-not-allowed'
                    : isSelected
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary hover:bg-secondary/80 cursor-pointer'
                }`}
              >
                {day ? day.getDate() : ''}
              </button>
            )
          })}
        </div>
      </div>

      {bookingData.date && (
        <p className="mt-6 p-4 bg-accent/10 rounded text-accent font-semibold">
          Selected: {bookingData.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      )}
    </div>
  )
}
