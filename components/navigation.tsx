'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  onBookingClick: () => void
}

export default function Navigation({ currentPage, setCurrentPage, onBookingClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollYProgress, scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    // Hide nav if scrolling down and past the first 150px
    if (latest > 150 && latest > previous) {
      setHidden(true)
      setMobileMenuOpen(false) // auto close menu on scroll down
    } else {
      setHidden(false)
    }
  })

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Artists', page: 'artists' },
    { label: 'Services', page: 'services' },
    { label: 'Pricing', page: 'pricing' },
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
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed z-50 transition-colors duration-500 ${
          scrolled
            ? 'top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[95%] md:max-w-5xl rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]'
            : 'top-0 left-0 right-0 w-full bg-transparent border-b border-transparent pt-2'
        }`}
      >
        {/* Main Navbar */}
        <nav className="w-full flex items-center justify-between px-4 lg:px-6 h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${!scrolled && currentPage === 'home' ? 'bg-white/20 backdrop-blur-sm' : 'bg-accent'}`}>
              <span className="text-white font-serif font-bold text-sm">Ι</span>
            </div>
            <span className={`font-serif font-bold text-lg tracking-tight ${!scrolled && currentPage === 'home' ? 'text-white drop-shadow-md' : 'text-foreground'}`}>
              Ink Collective
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-0.5 mx-4">
            {navItems.map((item) => {
              const isTransparentOnHome = !scrolled && currentPage === 'home'
              
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors rounded-full ${
                    currentPage === item.page
                      ? (isTransparentOnHome ? 'text-white font-bold drop-shadow-md' : 'text-foreground font-bold bg-secondary/80')
                      : (isTransparentOnHome ? 'text-white/80 hover:text-white drop-shadow-md' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50')
                  }`}
                >
                  {item.label}
                  {currentPage === item.page && isTransparentOnHome && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Button
              onClick={onBookingClick}
              size="sm"
              className={`font-medium text-[13px] px-5 h-10 rounded-full transition-colors ${
                !scrolled && currentPage === 'home'
                  ? 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                  : 'bg-accent hover:bg-[#FF5A5F] text-white shadow-sm'
              }`}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${!scrolled && currentPage === 'home' && !mobileMenuOpen ? 'text-white drop-shadow-md' : 'text-foreground bg-secondary/50'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Scroll Progress */}
        <motion.div
          className="h-[1px] bg-accent/80 origin-left mx-auto rounded-full"
          style={{ scaleX: scrollYProgress, width: scrolled ? 'calc(100% - 32px)' : '100%', marginBottom: scrolled ? '4px' : '0' }}
        />
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-background flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-4 max-w-sm mx-auto w-full flex-1 justify-center">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-center py-4 rounded-xl text-2xl font-serif transition-colors ${
                    currentPage === item.page
                      ? 'text-accent font-bold'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="mt-8 max-w-sm mx-auto w-full">
              <Button
                onClick={() => {
                  onBookingClick()
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-accent hover:bg-[#FF5A5F] text-white font-medium h-14 text-lg rounded-xl"
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header spacer */}
      {currentPage !== 'home' && (
        <div className="h-16 lg:h-[88px]" />
      )}
    </>
  )
}
