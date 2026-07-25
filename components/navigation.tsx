'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
      {/* Fixed header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <nav className="flex items-center justify-between px-4 md:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center shadow-md shadow-accent/20">
              <span className="text-accent-foreground font-serif font-bold text-sm">Ι</span>
            </div>
            <span className="font-serif font-bold text-lg hidden sm:inline">Ink Collective</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm transition-colors ${
                  currentPage === item.page
                    ? 'text-accent font-semibold'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Book Now + Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={onBookingClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md shadow-accent/20"
            >
              Book Now
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/60 hover:text-foreground"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left py-2 px-3 rounded transition-colors ${
                    currentPage === item.page
                      ? 'bg-accent/10 text-accent font-semibold'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onBookingClick()
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-2"
              >
                Book Now
              </Button>
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
      <div className="h-20" />
    </>
  )
}
