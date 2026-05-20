'use client'

import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-typie-red relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
          Craving Something Delicious?
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Don't wait! Order now and get your favorite Chinese fast food delivered hot and fresh. 
          Your taste buds will thank you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+918442559842"
            className="inline-flex items-center gap-2 bg-white text-typie-red px-8 py-4 font-bold rounded-full hover:bg-typie-gold hover:text-typie-dark transition-all duration-300 shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Call to Order
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-bold rounded-full hover:bg-white hover:text-typie-red transition-all duration-300"
          >
            <MapPin className="w-5 h-5" />
            Visit Us
          </Link>
        </div>
      </div>
    </section>
  )
}
