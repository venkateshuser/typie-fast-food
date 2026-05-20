'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Flame } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-full transition-colors duration-300 ${
              scrolled ? 'bg-typie-red' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Flame className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-typie-red' : 'text-white'
              }`}>
                TYPIE
              </span>
              <span className={`text-[10px] tracking-[0.3em] uppercase -mt-1 transition-colors duration-300 ${
                scrolled ? 'text-typie-gold' : 'text-white/80'
              }`}>
                Fast Food Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full ${
                    isActive
                      ? scrolled
                        ? 'text-typie-red bg-typie-red/5'
                        : 'text-typie-gold bg-white/10'
                      : scrolled
                      ? 'text-gray-700 hover:text-typie-red hover:bg-typie-red/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full ${
                      scrolled ? 'bg-typie-red' : 'bg-typie-gold'
                    }`} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="/menu"
              className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-typie-red text-white hover:bg-typie-red-dark'
                  : 'bg-typie-gold text-typie-dark hover:bg-white'
              }`}
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              scrolled ? 'text-typie-red hover:bg-typie-red/10' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-semibold uppercase tracking-wide rounded-full transition-colors ${
                  isActive
                    ? 'bg-typie-red text-white'
                    : 'text-gray-700 hover:bg-typie-red/5 hover:text-typie-red'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/menu"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-3 bg-typie-red text-white text-sm font-bold uppercase tracking-wide rounded-full text-center hover:bg-typie-red-dark transition-colors"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
