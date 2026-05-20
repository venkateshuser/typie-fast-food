'use client'

import { Flame, Clock, Leaf, Award } from 'lucide-react'

const features = [
  {
    icon: Flame,
    title: 'Authentic Flavors',
    description: 'Our recipes are crafted with traditional Chinese techniques and secret spice blends passed down through generations.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source the freshest vegetables, premium meats, and quality spices daily to ensure every dish is perfect.',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Hungry now? Our efficient kitchen team ensures your food is ready in minutes without compromising on quality.',
  },
  {
    icon: Award,
    title: 'Best Quality',
    description: 'Rated 4.8 stars by over 2,000 happy customers. Quality is our promise, and taste is our guarantee.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-typie-red font-semibold text-sm uppercase tracking-[0.2em]">
            Why Us
          </span>
          <h2 className="section-title mt-3">
            What Makes Us <span className="text-typie-red">Special</span>
          </h2>
          <p className="section-subtitle">
            We're not just another fast food joint. Here's why thousands of food lovers choose Typie every day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-lg border border-gray-100 hover:border-typie-red/20 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-typie-red/10 text-typie-red mb-6 group-hover:bg-typie-red group-hover:text-white transition-all duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-typie-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
