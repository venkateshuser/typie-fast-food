import Link from 'next/link'
import { Flame, MapPin, Phone, Clock, Mail } from 'lucide-react'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="bg-typie-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-typie-red rounded-full">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  TYPIE
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-typie-gold -mt-1">
                  Fast Food Center
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving authentic Chinese fast food since day one. Fresh ingredients, 
              bold flavors, and a dining experience you won't forget.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-typie-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-typie-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-typie-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-typie-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Call us</p>
                  <a href="tel:+918442559842" className="text-white hover:text-typie-gold transition-colors text-sm font-medium">
                    +91 84425 59842
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-typie-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:typie.fastfood@gmail.com" className="text-white hover:text-typie-gold transition-colors text-sm font-medium">
                    typie.fastfood@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-typie-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Hours</p>
                  <p className="text-white text-sm font-medium">Mon - Sun: 11AM - 11PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-typie-gold">
              Find Us
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-typie-red shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Main Street, Near City Center,<br />
                Your City, State - 000000
              </p>
            </div>
            <div className="mt-6 aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDAwJzAwLjAiTiAwMMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title="Typie Fast Food Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Typie Fast Food Center. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-typie-gold transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-typie-gold transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
