'use client'

import Link from 'next/link'
import FoodCard from '../components/FoodCard'
import { ArrowRight } from 'lucide-react'

const featuredItems = [
  {
    name: 'Hakka Noodles',
    description: 'Stir-fried noodles tossed with fresh vegetables, soy sauce, and authentic Chinese spices. A crowd favorite!',
    price: '₹120',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=80',
    rating: 4.8,
    isVeg: true,
  },
  {
    name: 'Chicken Fried Rice',
    description: 'Fragrant basmati rice wok-tossed with tender chicken pieces, eggs, and garden-fresh vegetables.',
    price: '₹150',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
    rating: 4.7,
    isVeg: false,
  },
  {
    name: 'Veg Manchurian',
    description: 'Crispy vegetable balls in a rich, tangy Manchurian gravy. Perfect with noodles or fried rice.',
    price: '₹140',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
    rating: 4.9,
    isVeg: true,
  },
  {
    name: 'Shezwan Fried Rice',
    description: 'Spicy Shezwan sauce-infused fried rice with your choice of vegetables or chicken. Fiery and flavorful!',
    price: '₹160',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
    rating: 4.6,
    isVeg: false,
  },
  {
    name: 'Soft Drinks',
    description: 'Refreshing Coca-Cola, Sprite, Fanta, and more. The perfect companion to your meal.',
    price: '₹40',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80',
    rating: 4.5,
    isVeg: true,
  },
  {
    name: 'Cool Drinks',
    description: 'Fresh lime soda, cold coffee, milkshakes, and seasonal fruit juices to beat the heat.',
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80',
    rating: 4.7,
    isVeg: true,
  },
]

export default function FeaturedMenu() {
  return (
    <section className="py-20 md:py-28 bg-typie-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-typie-red font-semibold text-sm uppercase tracking-[0.2em]">
            Our Specialties
          </span>
          <h2 className="section-title mt-3">
            Popular <span className="text-typie-red">Menu</span> Items
          </h2>
          <p className="section-subtitle">
            Handpicked favorites that our customers can't get enough of. 
            Each dish is crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Food Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredItems.map((item) => (
            <FoodCard key={item.name} {...item} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-typie-red text-white px-8 py-3 font-semibold rounded-full hover:bg-typie-red-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
