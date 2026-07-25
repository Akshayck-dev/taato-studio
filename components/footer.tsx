export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Ink Collective</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Premium tattoo artistry and custom design. Established 2015. Award-winning artists dedicated to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Artists</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="tel:+14155551234" className="text-sm text-foreground/60 hover:text-accent transition-colors">+1 (415) 555-1234</a></li>
              <li><a href="mailto:hello@inkcollective.com" className="text-sm text-foreground/60 hover:text-accent transition-colors">hello@inkcollective.com</a></li>
              <li className="text-sm text-foreground/60">San Francisco, CA</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Hours</h4>
            <ul className="space-y-1 text-sm text-foreground/60">
              <li>Mon - Fri: 12 PM - 9 PM</li>
              <li>Saturday: 11 AM - 8 PM</li>
              <li>Sunday: 12 PM - 6 PM</li>
              <li className="pt-2 text-xs">Closed Holidays</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40">© 2025 Ink Collective. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
