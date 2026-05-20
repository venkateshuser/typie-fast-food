import Image from 'next/image'
import { Star } from 'lucide-react'

interface FoodCardProps {
  name: string
  description: string
  price: string
  image: string
  rating?: number
  isVeg?: boolean
}

export default function FoodCard({ 
  name, 
  description, 
  price, 
  image, 
  rating = 4.5,
  isVeg = false 
}: FoodCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-100">
      {/* Image Container - Strict 4:3 aspect ratio */}
      <div className="relative w-full aspect-4-3 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Veg/Non-veg badge */}
        <div className="absolute top-3 left-3">
          <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center ${
            isVeg ? 'border-green-600 bg-white' : 'border-red-600 bg-white'
          }`}>
            <div className={`w-2.5 h-2.5 rounded-full ${
              isVeg ? 'bg-green-600' : 'bg-red-600'
            }`} />
          </div>
        </div>
        {/* Price badge */}
        <div className="absolute bottom-3 right-3 bg-typie-red text-white px-3 py-1 rounded-sm font-bold text-sm shadow-lg">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-bold text-lg text-typie-dark group-hover:text-typie-red transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-typie-gold text-typie-gold" />
            <span className="text-sm font-semibold text-gray-700">{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        <button className="mt-4 w-full py-2.5 border-2 border-typie-red text-typie-red font-semibold text-sm uppercase tracking-wide rounded-full hover:bg-typie-red hover:text-white transition-all duration-300">
          Add to Order
        </button>
      </div>
    </div>
  )
}
