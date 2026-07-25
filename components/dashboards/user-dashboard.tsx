'use client'

import { Calendar, FileText, LogOut, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const upcomingAppointments = [
  {
    id: '1',
    date: 'December 15, 2024',
    time: '3:00 PM',
    artist: 'Marcus Reid',
    service: 'Custom Sleeve Design',
    status: 'Confirmed',
  },
  {
    id: '2',
    date: 'January 10, 2025',
    time: '11:00 AM',
    artist: 'Elena Vasquez',
    service: 'Fine Line Touch-up',
    status: 'Pending',
  },
]

const pastAppointments = [
  {
    id: '3',
    date: 'November 22, 2024',
    artist: 'James Chen',
    service: 'Japanese Dragon',
  },
  {
    id: '4',
    date: 'October 18, 2024',
    artist: 'Sophie Laurent',
    service: 'Watercolor Phoenix',
  },
]

const invoices = [
  { id: '1', date: 'November 22, 2024', service: 'Japanese Dragon', amount: '$450', status: 'Paid' },
  { id: '2', date: 'October 18, 2024', service: 'Watercolor Phoenix', amount: '$350', status: 'Paid' },
]

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold">My Dashboard</h1>
            <p className="text-foreground/60">Welcome back, Sarah!</p>
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
            <p className="text-foreground/60 text-sm font-semibold mb-2">Total Appointments</p>
            <p className="text-3xl font-bold text-accent">4</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-foreground/60 text-sm font-semibold mb-2">Upcoming</p>
            <p className="text-3xl font-bold text-accent">2</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-foreground/60 text-sm font-semibold mb-2">Total Spent</p>
            <p className="text-3xl font-bold text-accent">$1,250</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-foreground/60 text-sm font-semibold mb-2">Member Since</p>
            <p className="text-lg font-bold">May 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Upcoming Appointments */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-accent" />
              <h2 className="text-2xl font-serif font-bold">Upcoming Appointments</h2>
            </div>

            <div className="space-y-4">
              {upcomingAppointments.map((apt) => (
                <div key={apt.id} className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{apt.service}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      apt.status === 'Confirmed' ? 'bg-accent/20 text-accent' : 'bg-amber-500/20 text-amber-500'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 mb-2">Artist: {apt.artist}</p>
                  <p className="text-sm text-foreground/60">{apt.date} at {apt.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Recent Activity</h2>

            {/* Invoices Tab Content */}
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{invoice.service}</h3>
                      <p className="text-sm text-foreground/60">{invoice.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent mb-1">{invoice.amount}</p>
                      <p className="text-xs font-semibold text-green-500">{invoice.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Past Appointments */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">Past Appointments</h2>

          <div className="space-y-4">
            {pastAppointments.map((apt) => (
              <div key={apt.id} className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{apt.service}</h3>
                    <p className="text-sm text-foreground/60">Artist: {apt.artist} • {apt.date}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
