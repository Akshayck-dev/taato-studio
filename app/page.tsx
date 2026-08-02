'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import StyleShowcase from '@/components/home/style-showcase'
import Portfolio from '@/components/portfolio'
import Artists from '@/components/artists'

import Testimonials from '@/components/testimonials'
import ConsultationCTA from '@/components/home/consultation-cta'

import Services from '@/components/services'
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
        {currentPage === 'services' && <Services onBookNow={() => setCurrentPage('booking')} />}
        {currentPage === 'artists' && <Artists onBookNow={() => setCurrentPage('booking')} />}
        {currentPage === 'portfolio' && <Portfolio onBookNow={() => setCurrentPage('booking')} />}
        {currentPage === 'testimonials' && <Testimonials />}
        {currentPage === 'pricing' && <Pricing onBookNow={() => setCurrentPage('booking')} />}
        {currentPage === 'aftercare' && <AftercarePage />}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'contact' && <Contact />}
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

    </BookingProvider>
  )
}
