import Image from 'next/image'
import FoodCard from '../components/FoodCard'
import { UtensilsCrossed } from 'lucide-react'

const menuCategories = [
  {
    category: 'Noodles',
    items: [
      {
        name: 'Hakka Noodles',
        description: 'Stir-fried noodles with fresh vegetables, soy sauce, and Chinese spices.',
        price: '₹120',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=80',
        rating: 4.8,
        isVeg: true,
      },
      {
        name: 'Schezwan Noodles',
        description: 'Spicy Schezwan sauce tossed noodles with vegetables and chili.',
        price: '₹130',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
        rating: 4.7,
        isVeg: true,
      },
      {
        name: 'Chicken Noodles',
        description: 'Wok-tossed noodles with tender chicken pieces and vegetables.',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
        rating: 4.6,
        isVeg: false,
      },
    ],
  },
  {
    category: 'Fried Rice',
    items: [
      {
        name: 'Veg Fried Rice',
        description: 'Fragrant rice tossed with mixed vegetables and soy sauce.',
        price: '₹110',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
        rating: 4.5,
        isVeg: true,
      },
      {
        name: 'Chicken Fried Rice',
        description: 'Classic fried rice with chicken, eggs, and fresh vegetables.',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
        rating: 4.7,
        isVeg: false,
      },
      {
        name: 'Egg Fried Rice',
        description: 'Scrambled eggs mixed with rice and seasoned to perfection.',
        price: '₹130',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
        rating: 4.4,
        isVeg: false,
      },
    ],
  },
  {
    category: 'Manchurian',
    items: [
      {
        name: 'Veg Manchurian (Dry)',
        description: 'Crispy vegetable balls tossed in spicy Manchurian sauce.',
        price: '₹140',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
        rating: 4.9,
        isVeg: true,
      },
      {
        name: 'Veg Manchurian (Gravy)',
        description: 'Vegetable balls in rich, tangy Manchurian gravy.',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
        rating: 4.8,
        isVeg: true,
      },
      {
        name: 'Chicken Manchurian',
        description: 'Tender chicken in classic Manchurian gravy with bell peppers.',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
        rating: 4.7,
        isVeg: false,
      },
    ],
  },
  {
    category: 'Shezwan Rice',
    items: [
      {
        name: 'Veg Shezwan Rice',
        description: 'Fiery Shezwan sauce-infused rice with crunchy vegetables.',
        price: '₹140',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
        rating: 4.6,
        isVeg: true,
      },
      {
        name: 'Chicken Shezwan Rice',
        description: 'Spicy Shezwan rice loaded with juicy chicken pieces.',
        price: '₹170',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
        rating: 4.8,
        isVeg: false,
      },
      {
        name: 'Egg Shezwan Rice',
        description: 'Shezwan rice with scrambled eggs and vegetables.',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
        rating: 4.5,
        isVeg: false,
      },
    ],
  },
  {
    category: 'Soft Drinks',
    items: [
      {
        name: 'Coca-Cola',
        description: 'Classic refreshing cola served ice cold.',
        price: '₹40',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80',
        rating: 4.5,
        isVeg: true,
      },
      {
        name: 'Sprite',
        description: 'Crisp lemon-lime soda for a refreshing burst.',
        price: '₹40',
        image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&q=80',
        rating: 4.4,
        isVeg: true,
      },
      {
        name: 'Fanta',
        description: 'Orange flavored fizzy drink, fun and fruity.',
        price: '₹40',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80',
        rating: 4.3,
        isVeg: true,
      },
    ],
  },
  {
    category: 'Cool Drinks',
    items: [
      {
        name: 'Fresh Lime Soda',
        description: 'Refreshing lime soda with a hint of mint. Sweet or salted.',
        price: '₹60',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80',
        rating: 4.7,
        isVeg: true,
      },
      {
        name: 'Cold Coffee',
        description: 'Rich and creamy cold coffee topped with whipped cream.',
        price: '₹80',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
        rating: 4.8,
        isVeg: true,
      },
      {
        name: 'Mango Milkshake',
        description: 'Thick and creamy mango milkshake made with real mangoes.',
        price: '₹90',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80',
        rating: 4.9,
        isVeg: true,
      },
    ],
  },
]

export const metadata = {
  title: 'Menu | Typie Fast Food Center',
  description: 'Explore our full menu of authentic Chinese fast food. Noodles, Fried Rice, Manchurian, Shezwan Rice, Soft Drinks & Cool Drinks.',
}

export default function MenuPage() {
  return (
    <div className="pt-24 pb-20 bg-typie-cream/30">
      {/* Page Header */}
      <div className="relative h-[40vh] min-h-[300px] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=80"
          alt="Chinese food menu background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="inline-flex items-center gap-2 bg-typie-red/90 text-white px-4 py-2 rounded-full mb-4">
              <UtensilsCrossed className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">Our Menu</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white text-shadow-hero">
              Our <span className="text-typie-gold">Menu</span>
            </h1>
            <p className="text-white/80 mt-4 max-w-xl mx-auto">
              Discover our complete range of authentic Chinese fast food, crafted with passion and the finest ingredients.
            </p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {menuCategories.map((category) => (
          <div key={category.category} className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-typie-dark">
                {category.category}
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-typie-red font-semibold text-sm">
                {category.items.length} Items
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {category.items.map((item) => (
                <FoodCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
