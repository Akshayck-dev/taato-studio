'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MapPin, Clock, Phone, User, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  onBookingClick: () => void
}

export default function Navigation({ currentPage, setCurrentPage, onBookingClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Artists', page: 'artists' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ]

  const handleNavClick = (page: string) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Fixed Header with Widescreen Desktop Layout */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border/80 z-50 transition-all duration-300">
        
        {/* Top Desktop Utility Bar */}
        <div className="hidden lg:block bg-secondary/60 border-b border-border/40 py-1.5 px-6 text-xs text-foreground/70">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>450 Soho Arts District, New York, NY 10013</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Tue - Sun: 11:00 AM - 9:00 PM</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Master Artists Available Today
              </span>
            </div>
            
            <div className="flex items-center gap-5">
              <a href="tel:+12125550199" className="flex items-center gap-1.5 hover:text-accent font-medium transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>(212) 555-0199</span>
              </a>
              <div className="h-3 w-[1px] bg-border/60" />
              <button 
                onClick={() => setCurrentPage('user-dashboard')}
                className="flex items-center gap-1 hover:text-accent font-medium transition-colors"
              >
                <User className="w-3.5 h-3.5 text-accent" />
                <span>Client Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3.5">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center shadow-lg shadow-accent/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-accent-foreground font-serif font-bold text-lg">Ι</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-foreground group-hover:text-accent transition-colors">
                Ink Collective
              </span>
              <span className="text-[10px] tracking-widest text-accent font-semibold uppercase -mt-1 hidden sm:block">
                Master Tattoo Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation - All Items Visible */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-all relative py-1 ${
                  currentPage === item.page
                    ? 'text-accent font-semibold'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full animate-in fade-in duration-200" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Controls for Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={onBookingClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]"
            >
              Book Consultation
            </Button>
          </div>

          {/* Medium Screen (Tablet) Direct CTA + Menu */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <Button
              onClick={onBookingClick}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Book Now
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Screen Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground p-1.5"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile / Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col p-5 gap-3 max-w-md mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left py-2.5 px-4 rounded-lg text-sm transition-colors ${
                    currentPage === item.page
                      ? 'bg-accent/15 text-accent font-bold'
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-border/60 flex flex-col gap-2">
                <Button
                  onClick={() => {
                    onBookingClick()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
                >
                  Book Consultation
                </Button>
                <Button
                  onClick={() => handleNavClick('user-dashboard')}
                  variant="outline"
                  className="w-full text-xs font-semibold py-2.5 border-border text-foreground"
                >
                  <User className="w-3.5 h-3.5 mr-2 text-accent" />
                  Client Portal / Dashboard
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Top Scroll Reading Progress Indicator Line */}
        <div
          className="h-[2px] bg-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Spacing for fixed header */}
      <div className="h-20 lg:h-28" />
    </>
  )
}

