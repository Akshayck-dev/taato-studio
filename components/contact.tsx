'use client'

import { MapPin, Phone, Mail, Clock, Car, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Get In Touch</span>
          <h2 className="mt-3 text-foreground">Visit Our Studio</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Walk-ins welcome. Book a consultation or simply stop by to discuss your next piece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Studio Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-xl overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9!2d-74.0!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzEyLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MapPin className="w-4 h-4 text-accent" /> Address
                </div>
                <p className="text-sm text-muted-foreground">456 Urban Avenue<br />SoHo Arts District<br />New York, NY 10012</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Clock className="w-4 h-4 text-accent" /> Working Hours
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Mon–Thu: 12 PM – 8 PM</p>
                  <p>Fri–Sat: 11 AM – 9 PM</p>
                  <p>Sunday: 12 PM – 6 PM</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Phone className="w-4 h-4 text-accent" /> Contact
                </div>
                <div className="space-y-1.5">
                  <a href="tel:+12125550199" className="block text-sm text-muted-foreground hover:text-accent transition-colors">(212) 555-0199</a>
                  <a href="mailto:hello@inkcollective.com" className="block text-sm text-muted-foreground hover:text-accent transition-colors">hello@inkcollective.com</a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Car className="w-4 h-4 text-accent" /> Getting Here
                </div>
                <div className="text-sm text-muted-foreground space-y-1.5">
                  <p>Street parking available</p>
                  <p>Spring St. Station (6 line)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors bg-card border border-border rounded-lg px-4 py-2.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                @inkcollective.studio
              </a>
              <a href="#" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors bg-card border border-border rounded-lg px-4 py-2.5">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">Send Us a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Service Interest</label>
                <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors">
                  <option>Custom Design</option>
                  <option>Cover-up & Rework</option>
                  <option>Fine Line & Detail</option>
                  <option>Color & Realism</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                  placeholder="Tell us about your tattoo idea..."
                />
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <Button className="w-full bg-accent hover:bg-[#FF5A5F] text-white font-medium h-11">
                  Send Message
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  Or call us directly at <a href="tel:+12125550199" className="text-accent hover:underline">(212) 555-0199</a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
