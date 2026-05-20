'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, UtensilsCrossed } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full width, object-fit cover, never stretches */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=80"
          alt="Chinese fast food background - wok cooking with flames"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-typie-red/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <UtensilsCrossed className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide uppercase">
            Authentic Chinese Fast Food
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white text-shadow-hero leading-none mb-6 animate-fade-in-up">
          <span className="block">TYPIE</span>
          <span className="block text-typie-gold mt-2 text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] uppercase">
            Fast Food Center
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed text-shadow-hero animate-fade-in-up delay-100">
          Bold flavors, fresh ingredients, and the best Chinese fast food in town. 
          From sizzling noodles to fiery Shezwan rice — we bring the taste of China to your plate.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
          <Link href="/menu" className="btn-primary w-full sm:w-auto">
            View Our Menu
          </Link>
          <Link href="/contact" className="btn-outline w-full sm:w-auto">
            Find Us
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up delay-300">
          {[
            { value: '15+', label: 'Menu Items' },
            { value: '4.8', label: 'Star Rating' },
            { value: '2K+', label: 'Happy Customers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl text-typie-gold">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  )
}
