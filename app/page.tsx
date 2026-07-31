'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import StyleShowcase from '@/components/home/style-showcase'
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
import AftercarePage from '@/components/aftercare-page'
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
            <StyleShowcase 
              onExplorePortfolio={() => setCurrentPage('portfolio')}
              onBookNow={() => setCurrentPage('booking')}
            />
            <Portfolio 
              previewOnly={true} 
              onViewFullGallery={() => setCurrentPage('portfolio')}
              onBookNow={() => setCurrentPage('booking')}
            />
            <Artists 
              previewOnly={true} 
              onViewAllArtists={() => setCurrentPage('artists')}
              onBookNow={() => setCurrentPage('booking')}
            />
            <Testimonials />
            <ConsultationCTA onBookNow={() => setCurrentPage('booking')} />
          </>
        )}
        
        {/* Dynamic Inner Page Wrappers with Proper Spacing */}
        {currentPage === 'services' && <div className="py-2"><Services onBookNow={() => setCurrentPage('booking')} /></div>}
        {currentPage === 'artists' && <div className="py-2"><Artists onBookNow={() => setCurrentPage('booking')} /></div>}
        {currentPage === 'portfolio' && <div className="py-2"><Portfolio onBookNow={() => setCurrentPage('booking')} /></div>}
        {currentPage === 'testimonials' && <div className="py-2"><Testimonials /></div>}
        {currentPage === 'pricing' && <div className="py-2"><Pricing onBookNow={() => setCurrentPage('booking')} /></div>}
        {currentPage === 'aftercare' && <div className="py-2"><AftercarePage /></div>}
        {currentPage === 'faq' && <div className="py-2"><FAQ /></div>}
        {currentPage === 'contact' && <div className="py-2"><Contact /></div>}
        {currentPage === 'booking' && <BookingPage onClose={() => setCurrentPage('home')} />}
        {currentPage === 'user-dashboard' && <UserDashboard />}
        {currentPage === 'admin-dashboard' && <AdminDashboard />}
        {currentPage === 'artist-dashboard' && <ArtistDashboard />}
      </main>

      {/* Main Footer - Show on all pages except dashboards and booking */}
      {!['booking', 'user-dashboard', 'admin-dashboard', 'artist-dashboard'].includes(currentPage) && (
        <Footer />
      )}

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </BookingProvider>
  )
}
