'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-4 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold mb-8">Visit or Call</h3>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-foreground/60">456 Urban Avenue<br />Downtown Arts District<br />New York, NY 10001</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-foreground/60">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-foreground/60">hello@inkcollective.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Hours</h4>
                <p className="text-foreground/60">
                  Monday - Thursday: 12pm - 8pm<br />
                  Friday - Saturday: 11am - 9pm<br />
                  Sunday: 12pm - 6pm
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent resize-none"
                  placeholder="Tell us about your tattoo idea..."
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
