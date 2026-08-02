import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-14">
          {/* Studio */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xs">Ι</span>
              </div>
              <span className="font-serif font-bold text-base text-white">Ink Collective</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-5">
              Premium tattoo artistry by world-class specialists. Hospital-grade sterile suites, organic inks, and a complimentary 90-day touch-up guarantee.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/30 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="mailto:hello@inkcollective.com" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/30 transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <a href="tel:+12125550199" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/30 transition-all">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Studio</h4>
            <ul className="space-y-2.5">
              {['Home', 'Services', 'Artists', 'Portfolio', 'Pricing'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              {['FAQ', 'Contact', 'Aftercare Guide', 'Booking Policy', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                <span>456 Urban Ave, SoHo<br />New York, NY 10012</span>
              </div>
              <div className="space-y-1 text-xs">
                <p>Mon–Thu: 12 – 8 PM</p>
                <p>Fri–Sat: 11 AM – 9 PM</p>
                <p>Sun: 12 – 6 PM</p>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-white/60">© 2025 Ink Collective. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
