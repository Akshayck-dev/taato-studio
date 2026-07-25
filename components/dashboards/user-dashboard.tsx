'use client'

import { useState } from 'react'
import { Calendar, FileText, LogOut, ChevronRight, LayoutDashboard, Clock, DollarSign, Settings, User } from 'lucide-react'
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
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Dashboard Top Header */}
      <div className="bg-card border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold">
              SV
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground">Client Portal</h1>
              <p className="text-xs text-foreground/60">Welcome back, Sarah Vasquez</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 border-border text-foreground">
              <LogOut className="w-4 h-4 text-foreground/60" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area with Desktop Sidebar */}
      <div className="max-w-7xl mx-auto w-full flex-1 px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Navigation Sidebar */}
          <div className="md:col-span-3 bg-card border border-border/80 rounded-2xl p-4 space-y-2 sticky top-28">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20'
                  : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview & Stats</span>
            </button>

            <button
              onClick={() => setActiveTab('appointments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'appointments'
                  ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20'
                  : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Appointments</span>
            </button>

            <button
              onClick={() => setActiveTab('invoices')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'invoices'
                  ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20'
                  : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Billing & Invoices</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'settings'
                  ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20'
                  : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Account Settings</span>
            </button>
          </div>

          {/* Right Main Content Section */}
          <div className="md:col-span-9 space-y-8">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border border-border/80 rounded-xl p-5 hover:border-accent/40 transition-colors">
                <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wider mb-1">Total Appointments</p>
                <p className="text-3xl font-serif font-bold text-accent">4</p>
              </div>
              <div className="bg-card border border-border/80 rounded-xl p-5 hover:border-accent/40 transition-colors">
                <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wider mb-1">Upcoming Sessions</p>
                <p className="text-3xl font-serif font-bold text-accent">2</p>
              </div>
              <div className="bg-card border border-border/80 rounded-xl p-5 hover:border-accent/40 transition-colors">
                <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wider mb-1">Total Spent</p>
                <p className="text-3xl font-serif font-bold text-accent">$1,250</p>
              </div>
              <div className="bg-card border border-border/80 rounded-xl p-5 hover:border-accent/40 transition-colors">
                <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wider mb-1">VIP Tier Status</p>
                <p className="text-lg font-serif font-bold text-foreground">Collector Gold</p>
              </div>
            </div>

            {/* Upcoming Appointments Section */}
            <div className="bg-card border border-border/80 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h2 className="text-xl font-serif font-bold text-foreground">Upcoming Studio Appointments</h2>
                </div>
                <span className="text-xs text-foreground/50">2 Scheduled</span>
              </div>

              <div className="space-y-4">
                {upcomingAppointments.map((apt) => (
                  <div key={apt.id} className="bg-secondary/40 border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-foreground">{apt.service}</h3>
                        <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full ${
                          apt.status === 'Confirmed' ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-amber-500/20 text-amber-500 border border-amber-500/30'
                        }`}>
                          {apt.status}
                        </span>
                      </div>
                      <p className="text-xs text-foreground/60">Artist: <span className="text-foreground font-medium">{apt.artist}</span></p>
                      <p className="text-xs text-foreground/60 mt-0.5">{apt.date} at {apt.time}</p>
                    </div>

                    <Button size="sm" variant="outline" className="text-xs border-border text-foreground">
                      Manage Session
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Billing & Invoices */}
            <div className="bg-card border border-border/80 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  <h2 className="text-xl font-serif font-bold text-foreground">Recent Invoices & Receipts</h2>
                </div>
              </div>

              <div className="space-y-3">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="bg-secondary/40 border border-border/60 rounded-xl p-4 flex items-center justify-between hover:border-accent/40 transition-all">
                    <div>
                      <h3 className="font-semibold text-sm text-foreground mb-0.5">{invoice.service}</h3>
                      <p className="text-xs text-foreground/60">{invoice.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent text-sm">{invoice.amount}</p>
                      <p className="text-[11px] font-semibold text-emerald-400">{invoice.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Appointments */}
            <div className="bg-card border border-border/80 rounded-2xl p-6">
              <h2 className="text-xl font-serif font-bold text-foreground mb-6">Past Tattoo History</h2>

              <div className="space-y-3">
                {pastAppointments.map((apt) => (
                  <div key={apt.id} className="bg-secondary/40 border border-border/60 rounded-xl p-4 flex items-center justify-between hover:border-accent/40 transition-all cursor-pointer group">
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{apt.service}</h3>
                      <p className="text-xs text-foreground/60">Artist: {apt.artist} • Inked on {apt.date}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

