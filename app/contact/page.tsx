import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Typie Fast Food Center',
  description: 'Get in touch with Typie Fast Food Center. Call us, visit us, or send us a message. We would love to hear from you!',
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 84425 59842', '+91 98765 43210'],
    action: 'tel:+918442559842',
    actionLabel: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['typie.fastfood@gmail.com', 'orders.typie@gmail.com'],
    action: 'mailto:typie.fastfood@gmail.com',
    actionLabel: 'Send Email',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Main Street, Near City Center', 'Your City, State - 000000'],
    action: '#',
    actionLabel: 'Get Directions',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon - Sun: 11:00 AM - 11:00 PM', 'Delivery: 11:00 AM - 10:30 PM'],
    action: '#',
    actionLabel: 'View Hours',
  },
]

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-typie-red py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-typie-gold font-semibold text-sm uppercase tracking-[0.2em]">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mt-3">
            Contact <span className="text-typie-gold">Us</span>
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
            Have a question, feedback, or want to place an order? We are here to help. Reach out to us anytime!
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-typie-cream/30 p-8 rounded-lg border border-gray-100 hover:border-typie-red/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-typie-red/10 text-typie-red mb-6 group-hover:bg-typie-red group-hover:text-white transition-all duration-300">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-typie-dark mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-6">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <a
                  href={info.action}
                  className="inline-flex items-center text-typie-red font-semibold text-sm hover:text-typie-red-dark transition-colors"
                >
                  {info.actionLabel}
                  <Send className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 md:py-28 bg-typie-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-typie-dark mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below and we will get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-typie-red focus:ring-1 focus:ring-typie-red transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-typie-red focus:ring-1 focus:ring-typie-red transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-typie-red focus:ring-1 focus:ring-typie-red transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-typie-red focus:ring-1 focus:ring-typie-red transition-colors text-sm bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Place an Order</option>
                    <option>Feedback</option>
                    <option>Catering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what is on your mind..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-typie-red focus:ring-1 focus:ring-typie-red transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-typie-red text-white py-3.5 font-bold uppercase tracking-wide rounded-full hover:bg-typie-red-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-typie-dark mb-2">
                  Find Us on Map
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Visit our restaurant and experience the best Chinese fast food in person.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15233.322768087082!2d78.5092874!3d17.34781335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb995d847853af%3A0xa633a71f6b8420b9!2sTaipei%20Chinese%20Food%20Joint!5e0!3m2!1sen!2sin!4v1779459060914!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                    title="Typie Fast Food Location"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-typie-red p-8 rounded-lg shadow-lg text-white">
                <h3 className="font-display font-bold text-xl mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+918442559842"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-semibold text-sm">Call to Order</p>
                      <p className="text-white/70 text-xs">+91 84425 59842</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/918442559842?text=Hi%20Typie%20Fast%20Food%20Center!%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    <div>
                      <p className="font-semibold text-sm">WhatsApp Order</p>
                      <p className="text-white/70 text-xs">Chat with us on WhatsApp</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
