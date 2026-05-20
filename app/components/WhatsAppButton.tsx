'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '+918442559842'
  const message = encodeURIComponent('Hi Typie Fast Food Center! I would like to place an order.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 
                 bg-green-500 text-white rounded-full shadow-2xl 
                 hover:bg-green-600 hover:scale-110 transition-all duration-300 
                 animate-bounce-slow group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-3 py-1.5 
                       rounded-lg opacity-0 group-hover:opacity-100 transition-opacity 
                       whitespace-nowrap pointer-events-none">
        Chat with us
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </span>
    </a>
  )
}
