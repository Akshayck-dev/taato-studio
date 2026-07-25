'use client'

import { Users, Calendar, DollarSign, TrendingUp, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

const recentBookings = [
  { id: '1', client: 'Sarah Mitchell', artist: 'Marcus Reid', date: 'Dec 15, 2024', status: 'Confirmed' },
  { id: '2', client: 'John Smith', artist: 'Elena Vasquez', date: 'Dec 20, 2024', status: 'Pending' },
  { id: '3', client: 'Emma Wilson', artist: 'James Chen', date: 'Jan 5, 2025', status: 'Confirmed' },
]

const artistStats = [
  { name: 'Marcus Reid', bookings: 28, revenue: '$12,600', rating: 4.9 },
  { name: 'Elena Vasquez', bookings: 22, revenue: '$9,100', rating: 4.95 },
  { name: 'James Chen', bookings: 31, revenue: '$14,200', rating: 4.88 },
  { name: 'Sophie Laurent', bookings: 18, revenue: '$6,800', rating: 4.92 },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Admin Dashboard</h1>
            <p className="text-foreground/60">Studio Management & Analytics</p>
          </div>
          <Button variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold text-green-500">+12%</span>
            </div>
            <p className="text-foreground/60 text-sm font-semibold mb-2">Total Clients</p>
            <p className="text-3xl font-bold">485</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold text-green-500">+8%</span>
            </div>
            <p className="text-foreground/60 text-sm font-semibold mb-2">Bookings (This Month)</p>
            <p className="text-3xl font-bold">127</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <DollarSign className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold text-green-500">+24%</span>
            </div>
            <p className="text-foreground/60 text-sm font-semibold mb-2">Revenue (This Month)</p>
            <p className="text-3xl font-bold">$48.5K</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold text-green-500">4.9★</span>
            </div>
            <p className="text-foreground/60 text-sm font-semibold mb-2">Average Rating</p>
            <p className="text-3xl font-bold">4.91</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Recent Bookings */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Recent Bookings</h2>

            <div className="space-y-3">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{booking.client}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      booking.status === 'Confirmed' ? 'bg-accent/20 text-accent' : 'bg-amber-500/20 text-amber-500'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60">{booking.artist} • {booking.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Quick Actions</h2>

            <div className="space-y-3">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground justify-start h-12">
                Create New Booking
              </Button>
              <Button variant="outline" className="w-full justify-start h-12">
                Manage Artists
              </Button>
              <Button variant="outline" className="w-full justify-start h-12">
                View Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start h-12">
                Generate Report
              </Button>
            </div>
          </div>
        </div>

        {/* Artist Performance */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">Artist Performance</h2>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/60">Artist</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/60">Bookings</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/60">Revenue</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/60">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {artistStats.map((artist) => (
                    <tr key={artist.name} className="border-b border-border hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-4 font-semibold">{artist.name}</td>
                      <td className="px-6 py-4 text-foreground/60">{artist.bookings}</td>
                      <td className="px-6 py-4 text-accent font-semibold">{artist.revenue}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 text-accent font-semibold">
                          ★ {artist.rating}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
