# Typie Fast Food Center

A modern, responsive Next.js website for **Typie Fast Food Center** — an authentic Chinese fast food restaurant.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Playfair Display (display), Inter (body)

## 📁 Project Structure

```
typie-fast-food/
├── app/
│   ├── components/       # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FoodCard.tsx
│   │   └── WhatsAppButton.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedMenu.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── menu/
│   │   └── page.tsx      # Menu page
│   ├── about/
│   │   └── page.tsx      # About Us page
│   ├── contact/
│   │   └── page.tsx      # Contact Us page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Home page
├── public/
│   └── images/
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design Features

- **Color Palette:** Deep Red (#C0392B), White, Gold (#F1C40F) accents
- **Hero:** Full-width background image with `object-fit: cover`
- **Food Cards:** Strict 4:3 aspect ratio using `next/image` with `fill` + `object-cover`
- **Navigation:** Sticky navbar with transparent-to-solid scroll effect
- **WhatsApp Button:** Floating action button bottom-right linking to +918442559842
- **Responsive:** Mobile-first design, fully responsive across all breakpoints
- **Pages:** Home, Menu, About Us, Contact Us
- **Layout Feel:** Inspired by fiveguys.com — bold, clean, food-focused

## 🖼️ Image Handling

All images use Next.js `<Image>` component with:
- `fill` prop for responsive sizing
- `object-cover` to prevent stretching
- `sizes` attribute for optimal loading
- Lazy loading for below-fold images
- Priority loading for hero image

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📱 WhatsApp Integration

The floating WhatsApp button links to:
```
https://wa.me/918442559842
```

## 📄 License

All rights reserved — Typie Fast Food Center.
