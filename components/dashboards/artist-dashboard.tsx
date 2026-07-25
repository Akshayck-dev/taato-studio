'use client'

import { Calendar, Clock, Star, LogOut, ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const todayAppointments = [
  {
    id: '1',
    time: '10:00 AM',
    client: 'Alex Thompson',
    service: 'Geometric Mandala',
    status: 'Completed',
  },
  {
    id: '2',
    time: '1:00 PM',
    client: 'Sarah Mitchell',
    service: 'Fine Line Design',
    status: 'In Progress',
  },
  {
    id: '3',
    time: '3:30 PM',
    client: 'John Davis',
    service: 'Custom Sleeve',
    status: 'Scheduled',
  },
]

const upcomingBookings = [
  { id: '1', date: 'December 18', client: 'Emma Wilson', type: 'Custom Design' },
  { id: '2', date: 'December 22', client: 'Mike Johnson', type: 'Touch-up' },
  { id: '3', date: 'January 5', client: 'Lisa Anderson', type: 'Cover-up' },
]

const portfolioItems = [
  { id: '1', title: 'Japanese Dragon', likes: 124, date: 'Nov 2024' },
  { id: '2', title: 'Geometric Mandala', likes: 98, date: 'Nov 2024' },
  { id: '3', title: 'Fine Line Portrait', likes: 156, date: 'Oct 2024' },
]

export default function ArtistDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Artist Dashboard</h1>
            <p className="text-foreground/60">Welcome, Marcus Reid</p>
          </div>
          <Button variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-foreground/60 text-sm font-semibold mb-2">Today&apos;s Appointments</p>
            <p className="text-3xl font-bold text-accent">3</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-foreground/60 text-sm font-semibold mb-2">This Week</p>
            <p className="text-3xl font-bold text-accent">8</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-foreground/60 text-sm font-semibold mb-2">Rating</p>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold">4.9</p>
              <span className="text-accent">★</span>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-foreground/60 text-sm font-semibold mb-2">Total Reviews</p>
            <p className="text-3xl font-bold">127</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Today&apos;s Schedule */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-accent" />
              <h2 className="text-2xl font-serif font-bold">Today&apos;s Schedule</h2>
            </div>

            <div className="space-y-4">
              {todayAppointments.map((apt) => (
                <div key={apt.id} className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-lg">{apt.time}</p>
                      <p className="text-foreground/60">{apt.client}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-2 ${
                      apt.status === 'Completed'
                        ? 'bg-green-500/20 text-green-500'
                        : apt.status === 'In Progress'
                        ? 'bg-blue-500/20 text-blue-500'
                        : 'bg-secondary text-foreground/60'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60">{apt.service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-accent" />
              <h2 className="text-2xl font-serif font-bold">Upcoming Bookings</h2>
            </div>

            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-all">
                  <h3 className="font-semibold mb-2">{booking.client}</h3>
                  <p className="text-sm text-foreground/60 mb-2">{booking.type}</p>
                  <p className="text-sm text-accent font-semibold">{booking.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Highlights */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ImageIcon className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-serif font-bold">Recent Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all">
                <div className="aspect-square bg-muted"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">{item.date}</span>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold">{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Heart({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
