'use client'

import { useState } from 'react'
import {
  LayoutDashboard,
  Calendar,
  Image as ImageIcon,
  Users,
  Sliders,
  Settings,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  XCircle,
  TrendingUp,
  DollarSign,
  Star,
  ChevronRight,
  ShieldAlert,
  ArrowUpRight,
  UserCheck,
  LogOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface BookingItem {
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

const mockBookings: BookingItem[] = [
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
  {
    id: 'BK-1085',
    clientName: 'James Rodriguez',
    email: 'j.rodriguez@example.com',
    phone: '+1 (555) 901-2345',
    service: 'Cover-ups & Reworks',
    artist: 'James Chen',
    date: '2026-07-30',
    time: '01:00 PM',
    depositStatus: 'Paid',
    status: 'Completed',
    placement: 'Calf',
    size: '7" x 9"',
  },
]

import { useBooking } from '@/contexts/booking-context'

export interface AdminPanelProps {
  onLogout?: () => void
}

export default function AdminPanel({ onLogout }: AdminPanelProps) {
  const { bookings, updateBookingStatus } = useBooking()
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bookings' | 'portfolio' | 'artists' | 'services' | 'settings'>('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('All')
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null)

  const [servicesList, setServicesList] = useState([
    { name: 'Custom Design Session', rate: '$250 starting', duration: '2–6 hours' },
    { name: 'Cover-ups & Reworks', rate: '$350 starting', duration: '3–8 hours' },
    { name: 'Fine Line & Detail', rate: '$150 starting', duration: '1–4 hours' },
    { name: 'Color & Realism', rate: '$400 starting', duration: '4–10 hours' },
  ])
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false)
  const [newServiceName, setNewServiceName] = useState('')
  const [newServiceRate, setNewServiceRate] = useState('')
  const [newServiceDuration, setNewServiceDuration] = useState('')

  const filteredBookings = bookings.filter((item) => {
    const matchesSearch =
      item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-card border-b md:border-b-0 md:border-r border-border p-5 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center font-bold text-accent">
              A
            </div>
            <div>
              <h2 className="font-semibold text-sm leading-tight text-foreground">Studio Admin</h2>
              <p className="text-[10px] text-accent font-medium uppercase tracking-wider">Master Control Panel</p>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-accent text-white font-semibold'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard Overview
            </button>

            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'bookings'
                  ? 'bg-accent text-white font-semibold'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4" />
                Bookings
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/20 text-white font-bold">
                {bookings.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'portfolio'
                  ? 'bg-accent text-white font-semibold'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Portfolio Gallery
            </button>

            <button
              onClick={() => setActiveTab('artists')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'artists'
                  ? 'bg-accent text-white font-semibold'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <Users className="w-4 h-4" />
              Resident Artists
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'services'
                  ? 'bg-accent text-white font-semibold'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Services & Pricing
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'bg-accent text-white font-semibold'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <Settings className="w-4 h-4" />
              Studio Settings
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-border/50 space-y-3">
          <div className="text-[11px] text-muted-foreground">
            <p className="font-medium text-foreground">Ink Collective Studio</p>
            <p className="text-[10px]">SoHo, NYC · Single-Role Mode</p>
          </div>
          {onLogout && (
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout / Exit Admin
            </button>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-5 md:p-8 overflow-y-auto">
        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">Dashboard Overview</h1>
                <p className="text-xs text-muted-foreground mt-1">
                  Real-time studio operations and active consultation metrics.
                </p>
              </div>
              <Button size="sm" className="bg-accent hover:bg-[#FF5A5F] text-white text-xs h-9 px-4">
                <Plus className="w-3.5 h-3.5 mr-1.5" /> New Booking
              </Button>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border border-border p-5 rounded-xl">
                <div className="flex items-center justify-between text-muted-foreground mb-3">
                  <span className="text-xs font-medium">Total Bookings</span>
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">128</div>
                <p className="text-[10px] text-accent flex items-center gap-1 mt-1 font-medium">
                  <TrendingUp className="w-3 h-3" /> +14% from last month
                </p>
              </div>

              <div className="bg-card border border-border p-5 rounded-xl">
                <div className="flex items-center justify-between text-muted-foreground mb-3">
                  <span className="text-xs font-medium">Monthly Revenue</span>
                  <DollarSign className="w-4 h-4 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">$34,250</div>
                <p className="text-[10px] text-accent flex items-center gap-1 mt-1 font-medium">
                  <TrendingUp className="w-3 h-3" /> +8.2% target met
                </p>
              </div>

              <div className="bg-card border border-border p-5 rounded-xl">
                <div className="flex items-center justify-between text-muted-foreground mb-3">
                  <span className="text-xs font-medium">Active Artists</span>
                  <UserCheck className="w-4 h-4 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">4</div>
                <p className="text-[10px] text-muted-foreground mt-1">100% Chair Occupancy</p>
              </div>

              <div className="bg-card border border-border p-5 rounded-xl">
                <div className="flex items-center justify-between text-muted-foreground mb-3">
                  <span className="text-xs font-medium">Client Rating</span>
                  <Star className="w-4 h-4 text-accent fill-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">4.96</div>
                <p className="text-[10px] text-muted-foreground mt-1">1,200+ Verified Reviews</p>
              </div>
            </div>

            {/* Recent Appointments Table */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm text-foreground">Recent Consultation Requests</h3>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className="text-xs text-accent hover:underline flex items-center gap-1 font-medium"
                >
                  View All <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-border/60 text-muted-foreground">
                      <th className="pb-3 font-medium">ID</th>
                      <th className="pb-3 font-medium">Client Name</th>
                      <th className="pb-3 font-medium">Service</th>
                      <th className="pb-3 font-medium">Artist</th>
                      <th className="pb-3 font-medium">Date & Time</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {bookings.slice(0, 4).map((b) => (
                      <tr key={b.id} className="hover:bg-secondary/40 transition-colors">
                        <td className="py-3 font-medium text-foreground">{b.id}</td>
                        <td className="py-3 text-foreground">{b.clientName}</td>
                        <td className="py-3 text-muted-foreground">{b.service}</td>
                        <td className="py-3 text-muted-foreground">{b.artist}</td>
                        <td className="py-3 text-muted-foreground">
                          {b.date} at {b.time}
                        </td>
                        <td className="py-3">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              b.status === 'Confirmed'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : b.status === 'Pending'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-accent/10 text-accent border border-accent/20'
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BOOKINGS MANAGER */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">Bookings Management</h1>
                <p className="text-xs text-muted-foreground mt-1">
                  Manage incoming client consultations, deposits, and chair schedules.
                </p>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative min-w-[200px]">
                  <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search client or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-card border border-border rounded-lg text-xs pl-9 pr-3 py-2 text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="flex items-center gap-1 bg-card border border-border rounded-lg p-1">
                  {['All', 'Pending', 'Confirmed', 'Completed'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                        statusFilter === status
                          ? 'bg-accent text-white font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-secondary/40 text-muted-foreground border-b border-border">
                    <tr>
                      <th className="p-4 font-medium">ID</th>
                      <th className="p-4 font-medium">Client Info</th>
                      <th className="p-4 font-medium">Service & Size</th>
                      <th className="p-4 font-medium">Assigned Artist</th>
                      <th className="p-4 font-medium">Placement</th>
                      <th className="p-4 font-medium">Deposit</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-secondary/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">{b.id}</td>
                        <td className="p-4">
                          <p className="font-medium text-foreground">{b.clientName}</p>
                          <p className="text-[10px] text-muted-foreground">{b.email}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-foreground">{b.service}</p>
                          <p className="text-[10px] text-muted-foreground">{b.size}</p>
                        </td>
                        <td className="p-4 text-foreground">{b.artist}</td>
                        <td className="p-4 text-muted-foreground">{b.placement}</td>
                        <td className="p-4">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              b.depositStatus === 'Paid'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : 'bg-amber-500/10 text-amber-400'
                            }`}
                          >
                            {b.depositStatus}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              b.status === 'Confirmed'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : b.status === 'Pending'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-accent/10 text-accent border border-accent/20'
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <Button
                            onClick={() => setSelectedBooking(b)}
                            variant="outline"
                            size="sm"
                            className="text-[11px] h-7 px-2.5 border-border text-foreground hover:bg-secondary"
                          >
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal for Booking Details */}
            {selectedBooking && (
              <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                <div className="bg-card border border-border rounded-xl p-6 max-w-md w-full space-y-5">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <h3 className="font-bold text-base text-foreground">Appointment Details ({selectedBooking.id})</h3>
                    <button
                      onClick={() => setSelectedBooking(null)}
                      className="text-muted-foreground hover:text-foreground text-xs"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between py-1 border-b border-border/30">
                      <span className="text-muted-foreground">Client Name:</span>
                      <span className="font-semibold text-foreground">{selectedBooking.clientName}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/30">
                      <span className="text-muted-foreground">Phone & Email:</span>
                      <span className="text-foreground">{selectedBooking.phone}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/30">
                      <span className="text-muted-foreground">Requested Service:</span>
                      <span className="text-foreground">{selectedBooking.service}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/30">
                      <span className="text-muted-foreground">Body Placement:</span>
                      <span className="text-foreground">{selectedBooking.placement} ({selectedBooking.size})</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/30">
                      <span className="text-muted-foreground">Assigned Artist:</span>
                      <span className="text-accent font-medium">{selectedBooking.artist}</span>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <Button
                      onClick={() => setSelectedBooking(null)}
                      variant="outline"
                      size="sm"
                      className="text-xs border-border text-foreground"
                    >
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        updateBookingStatus(selectedBooking.id, 'Confirmed', 'Paid')
                        setSelectedBooking(null)
                      }}
                      size="sm"
                      className="bg-accent hover:bg-[#FF5A5F] text-white text-xs"
                    >
                      Approve & Confirm
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PORTFOLIO MANAGER */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">Portfolio Gallery Manager</h1>
                <p className="text-xs text-muted-foreground mt-1">
                  Upload new tattoo masterpieces, set category tags, and feature top artwork.
                </p>
              </div>
              <Button size="sm" className="bg-accent hover:bg-[#FF5A5F] text-white text-xs h-9 px-4">
                <Plus className="w-3.5 h-3.5 mr-1.5" /> Upload New Photo
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { title: 'Fine Line Floral', artist: 'Elena Vasquez', category: 'Fine Line' },
                { title: 'Blackwork Dragon', artist: 'Marcus Reid', category: 'Blackwork' },
                { title: 'Japanese Phoenix', artist: 'James Chen', category: 'Irezumi' },
                { title: 'Color Realism Rose', artist: 'Sophie Laurent', category: 'Realism' },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden p-3 space-y-2">
                  <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
                    <img
                      src="/hero-showcase.png"
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider bg-accent/80 text-white px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-xs text-foreground truncate">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground">by {item.artist}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: RESIDENT ARTISTS */}
        {activeTab === 'artists' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">Resident Artists</h1>
                <p className="text-xs text-muted-foreground mt-1">
                  Manage resident artist profiles, specialties, and chair schedules.
                </p>
              </div>
              <Button size="sm" className="bg-accent hover:bg-[#FF5A5F] text-white text-xs h-9 px-4">
                <Plus className="w-3.5 h-3.5 mr-1.5" /> Add New Artist
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Elena Vasquez', title: 'Micro-Realism & Fine Line', exp: '8 yrs', rating: '4.98' },
                { name: 'Marcus Reid', title: 'Blackwork & Heavy Contrast', exp: '10 yrs', rating: '4.95' },
                { name: 'James Chen', title: 'Japanese Irezumi Specialist', exp: '12 yrs', rating: '4.99' },
                { name: 'Sophie Laurent', title: 'Watercolor & Color Realism', exp: '7 yrs', rating: '4.92' },
              ].map((artist, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-bold text-accent text-base shrink-0">
                    {artist.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-foreground">{artist.name}</h4>
                    <p className="text-xs text-accent font-medium mt-0.5">{artist.title}</p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {artist.exp} experience · ★ {artist.rating} rating
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SERVICES & PRICING */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">Services & Pricing Catalog</h1>
                <p className="text-xs text-muted-foreground mt-1">
                  Configure offered tattoo services, durations, and starting rates.
                </p>
              </div>
              <Button
                onClick={() => setIsAddServiceOpen(true)}
                size="sm"
                className="bg-accent hover:bg-[#FF5A5F] text-white text-xs h-9 px-4"
              >
                <Plus className="w-3.5 h-3.5 mr-1.5" /> Add New Service
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              {servicesList.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
                  <div>
                    <h4 className="font-medium text-xs text-foreground">{s.name}</h4>
                    <p className="text-[10px] text-muted-foreground">Est. Duration: {s.duration}</p>
                  </div>
                  <span className="text-xs font-semibold text-accent">{s.rate}</span>
                </div>
              ))}
            </div>

            {/* Add Service Modal */}
            {isAddServiceOpen && (
              <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                <div className="bg-card border border-border rounded-xl p-6 max-w-md w-full space-y-4">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <h3 className="font-bold text-base text-foreground">Add New Service Offering</h3>
                    <button
                      onClick={() => setIsAddServiceOpen(false)}
                      className="text-muted-foreground hover:text-foreground text-xs"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="text-muted-foreground font-medium">Service Title</label>
                      <input
                        type="text"
                        placeholder="e.g. Piercing & Body Art"
                        value={newServiceName}
                        onChange={(e) => setNewServiceName(e.target.value)}
                        className="w-full mt-1 bg-background border border-border rounded-lg p-2.5 text-foreground text-xs focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-muted-foreground font-medium">Starting Rate</label>
                      <input
                        type="text"
                        placeholder="e.g. $180 starting"
                        value={newServiceRate}
                        onChange={(e) => setNewServiceRate(e.target.value)}
                        className="w-full mt-1 bg-background border border-border rounded-lg p-2.5 text-foreground text-xs focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-muted-foreground font-medium">Est. Duration</label>
                      <input
                        type="text"
                        placeholder="e.g. 1–2 hours"
                        value={newServiceDuration}
                        onChange={(e) => setNewServiceDuration(e.target.value)}
                        className="w-full mt-1 bg-background border border-border rounded-lg p-2.5 text-foreground text-xs focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-border/40">
                    <Button
                      onClick={() => setIsAddServiceOpen(false)}
                      variant="outline"
                      size="sm"
                      className="text-xs border-border text-foreground"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        if (newServiceName.trim()) {
                          setServicesList([
                            ...servicesList,
                            {
                              name: newServiceName,
                              rate: newServiceRate || '$200 starting',
                              duration: newServiceDuration || '2 hours',
                            },
                          ])
                          setNewServiceName('')
                          setNewServiceRate('')
                          setNewServiceDuration('')
                          setIsAddServiceOpen(false)
                        }
                      }}
                      size="sm"
                      className="bg-accent hover:bg-[#FF5A5F] text-white text-xs"
                    >
                      Save Service
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 6: STUDIO SETTINGS */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">Studio Settings</h1>
              <p className="text-xs text-muted-foreground mt-1">
                Manage business details, deposit rates, and cancellation policies.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4 max-w-xl">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Studio Name</label>
                <input
                  type="text"
                  defaultValue="Ink Collective Tattoo Studio"
                  className="w-full mt-1 bg-background border border-border rounded-lg text-xs p-2.5 text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground">Address / Location</label>
                <input
                  type="text"
                  defaultValue="142 Spring Street, SoHo, New York, NY 10012"
                  className="w-full mt-1 bg-background border border-border rounded-lg text-xs p-2.5 text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground">Consultation Deposit Amount</label>
                <input
                  type="text"
                  defaultValue="$50.00 USD"
                  className="w-full mt-1 bg-background border border-border rounded-lg text-xs p-2.5 text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <Button size="sm" className="bg-accent hover:bg-[#FF5A5F] text-white text-xs h-9 px-5">
                Save Studio Settings
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
