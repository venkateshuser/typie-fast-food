'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Regular Customer',
    text: 'The Hakka Noodles here are absolutely incredible! Best Chinese fast food I have ever had. The flavors are authentic and the portions are generous.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Food Blogger',
    text: 'I have tried Chinese food all over the city, but Typie stands out. Their Shezwan Rice has the perfect balance of spice and flavor. A must-visit!',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'Local Resident',
    text: 'Quick service, amazing taste, and affordable prices. The Veg Manchurian is my go-to order every single time. Highly recommended!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-typie-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-typie-red rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-typie-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-typie-gold font-semibold text-sm uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="section-title mt-3 text-white">
            What Our <span className="text-typie-gold">Customers</span> Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-typie-gold/30 mb-4" />
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-typie-gold text-typie-gold" />
                ))}
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-white/50 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
