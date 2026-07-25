'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import ProcessSection from '@/components/home/process-section'
import SafetySection from '@/components/home/safety-section'
import StyleShowcase from '@/components/home/style-showcase'
import AftercareSection from '@/components/home/aftercare-section'
import ConsultationCTA from '@/components/home/consultation-cta'
import Services from '@/components/services'
import Artists from '@/components/artists'
import Portfolio from '@/components/portfolio'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import BookingPage from '@/components/booking/booking-page'
import UserDashboard from '@/components/dashboards/user-dashboard'
import AdminDashboard from '@/components/dashboards/admin-dashboard'
import ArtistDashboard from '@/components/dashboards/artist-dashboard'
import { BookingProvider } from '@/contexts/booking-context'
import ScrollToTop from '@/components/scroll-to-top'

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <BookingProvider>
      {currentPage !== 'booking' && (
        <Navigation 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          onBookingClick={() => setCurrentPage('booking')}
        />
      )}
      <main className="bg-background">
        {currentPage === 'home' && (
          <>
            <Hero 
              onBookNow={() => setCurrentPage('booking')} 
              onViewPortfolio={() => setCurrentPage('portfolio')}
            />
            <ProcessSection onBookNow={() => setCurrentPage('booking')} />
            <StyleShowcase 
              onExplorePortfolio={() => setCurrentPage('portfolio')}
              onBookNow={() => setCurrentPage('booking')}
            />
            <Services />
            <Artists />
            <SafetySection />
            <Testimonials />
            <AftercareSection />
            <ConsultationCTA onBookNow={() => setCurrentPage('booking')} />
          </>
        )}
        {currentPage === 'services' && <Services />}
        {currentPage === 'artists' && <Artists />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'testimonials' && <Testimonials />}
        {currentPage === 'pricing' && <Pricing />}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'booking' && <BookingPage onClose={() => setCurrentPage('home')} />}
        {currentPage === 'user-dashboard' && <UserDashboard />}
        {currentPage === 'admin-dashboard' && <AdminDashboard />}
        {currentPage === 'artist-dashboard' && <ArtistDashboard />}
      </main>

      {/* Demo Dashboard Links - Hidden on home screen */}
      {currentPage !== 'home' && currentPage !== 'booking' && !['user-dashboard', 'admin-dashboard', 'artist-dashboard'].includes(currentPage) && (
        <section className="bg-secondary border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
            <p className="text-sm text-foreground/60 mb-4">Demo Dashboards:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCurrentPage('user-dashboard')}
                className="px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded text-sm font-semibold transition-colors"
              >
                User Dashboard
              </button>
              <button
                onClick={() => setCurrentPage('admin-dashboard')}
                className="px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded text-sm font-semibold transition-colors"
              >
                Admin Dashboard
              </button>
              <button
                onClick={() => setCurrentPage('artist-dashboard')}
                className="px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded text-sm font-semibold transition-colors"
              >
                Artist Dashboard
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Main Footer - Show on all pages */}
      {!['booking', 'user-dashboard', 'admin-dashboard', 'artist-dashboard'].includes(currentPage) && (
        <Footer />
      )}

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </BookingProvider>
  )
}
