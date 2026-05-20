/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'typie-red': '#C0392B',
        'typie-red-dark': '#A93226',
        'typie-red-light': '#E74C3C',
        'typie-gold': '#F1C40F',
        'typie-gold-light': '#F9E79F',
        'typie-gold-dark': '#D4AC0D',
        'typie-cream': '#FDF2E9',
        'typie-dark': '#2C1810',
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}
