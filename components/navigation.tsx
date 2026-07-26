'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  onBookingClick: () => void
}

export default function Navigation({ currentPage, setCurrentPage, onBookingClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Artists', page: 'artists' },
    { label: 'Services', page: 'services' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Aftercare', page: 'aftercare' },
    { label: 'Contact', page: 'contact' },
    { label: 'Admin', page: 'admin' },
  ]

  const handleNavClick = (page: string) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          scrolled
            ? 'top-3 left-4 right-4 max-w-7xl mx-auto rounded-xl bg-background/90 backdrop-blur-md border border-border/80 shadow-lg shadow-black/20'
            : 'top-0 left-0 right-0 w-full bg-background/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
        {/* Minimal Top Info Bar — Desktop Only */}
        {!scrolled && (
          <div className="hidden lg:block border-b border-border/30">
            <div className="max-w-7xl mx-auto px-8 py-1.5 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-accent" />
                  SoHo, New York
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Open Today
                </span>
              </div>
              <a href="tel:+12125550199" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Phone className="w-3 h-3 text-accent" />
                (212) 555-0199
              </a>
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <span className="text-white font-serif font-bold text-sm">Ι</span>
            </div>
            <span className="font-serif font-bold text-lg tracking-tight text-foreground">
              Ink Collective
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative px-3 py-2 text-[13px] font-medium transition-colors rounded-md ${
                  currentPage === item.page
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={onBookingClick}
              size="sm"
              className="bg-accent hover:bg-[#FF5A5F] text-white font-medium text-[13px] px-5 h-9 rounded-lg transition-colors"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`text-left py-3 px-4 rounded-lg text-sm transition-colors ${
                      currentPage === item.page
                        ? 'bg-accent/10 text-accent font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-3 mt-2 border-t border-border/60">
                  <Button
                    onClick={() => {
                      onBookingClick()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full bg-accent hover:bg-[#FF5A5F] text-white font-medium h-11"
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress */}
        <motion.div
          className="h-[1px] bg-accent/80 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      {/* Header spacer */}
      <div className="h-16 lg:h-[88px]" />
    </>
  )
}
