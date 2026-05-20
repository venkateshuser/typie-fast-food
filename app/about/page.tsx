import Image from 'next/image'
import { Flame, Heart, Users, Target } from 'lucide-react'

export const metadata = {
  title: 'About Us | Typie Fast Food Center',
  description: 'Learn about Typie Fast Food Center - our story, our mission, and our passion for authentic Chinese fast food.',
}

const values = [
  {
    icon: Heart,
    title: 'Passion for Food',
    description: 'Every dish we serve is made with genuine love and passion. We believe great food comes from the heart.',
  },
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on quality. From sourcing fresh ingredients to the final plating, excellence is our standard.',
  },
  {
    icon: Users,
    title: 'Customer Happiness',
    description: 'Your smile is our success metric. We go above and beyond to ensure every customer leaves satisfied.',
  },
  {
    icon: Flame,
    title: 'Authentic Taste',
    description: 'Our recipes stay true to traditional Chinese flavors while adapting to local palates perfectly.',
  },
]

const milestones = [
  { year: '2020', event: 'Typie Fast Food Center was founded with a simple dream.' },
  { year: '2021', event: 'Expanded menu to include 15+ signature Chinese dishes.' },
  { year: '2022', event: 'Crossed 1,000 happy customers milestone.' },
  { year: '2023', event: 'Achieved 4.8-star average rating across all platforms.' },
  { year: '2024', event: 'Launched online ordering and delivery services.' },
  { year: '2025', event: 'Serving 2,000+ customers with the same love and dedication.' },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80"
          alt="Kitchen team preparing food"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="text-typie-gold font-semibold text-sm uppercase tracking-[0.2em]">
              Our Story
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white text-shadow-hero mt-3">
              About <span className="text-typie-gold">Typie</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                  alt="Our kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-typie-red text-white p-6 rounded-lg shadow-xl hidden md:block">
                <div className="font-display font-bold text-3xl">5+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
            <div>
              <span className="text-typie-red font-semibold text-sm uppercase tracking-[0.2em]">
                Who We Are
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-typie-dark mt-3 mb-6">
                Bringing Authentic Chinese Flavors to Your Neighborhood
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Typie Fast Food Center was born from a simple passion: to serve authentic Chinese fast food 
                that tastes like home. What started as a small kitchen has grown into a beloved local 
                destination for food lovers who crave bold, honest flavors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our founder believed that great Chinese food shouldn't be expensive or complicated. 
                It should be fresh, flavorful, and accessible to everyone. That philosophy drives 
                everything we do — from the way we source our ingredients to the way we plate every dish.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Typie stands as a testament to that vision. With over 2,000 happy customers 
                and a 4.8-star rating, we continue to serve the community with the same dedication 
                and love that we started with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-typie-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-typie-red font-semibold text-sm uppercase tracking-[0.2em]">
              Our Values
            </span>
            <h2 className="section-title mt-3">
              What We <span className="text-typie-red">Believe</span> In
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-typie-red/10 text-typie-red mb-6 group-hover:bg-typie-red group-hover:text-white transition-all duration-300">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-typie-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-typie-red font-semibold text-sm uppercase tracking-[0.2em]">
              Our Journey
            </span>
            <h2 className="section-title mt-3">
              The <span className="text-typie-red">Timeline</span>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-typie-red/20 md:-translate-x-px" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-typie-red rounded-full border-4 border-white shadow-md md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-typie-cream/50 p-6 rounded-lg">
                    <span className="text-typie-red font-display font-bold text-xl">
                      {milestone.year}
                    </span>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
