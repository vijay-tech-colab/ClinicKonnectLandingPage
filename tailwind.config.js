/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1B6CA8',
          light: '#2B84C8',
          dark: '#0F4C7A',
          50: '#EBF4FF',
          100: '#DBEAFE',
        },
        accent: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
        },
        brand: {
          bg: '#F8FAFF',
          card: '#FFFFFF',
          foreground: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
        },
        success: '#16A34A',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 8px 32px rgba(27, 108, 168, 0.12)',
        'hero': '0 24px 64px rgba(27, 108, 168, 0.15)',
        'float': '0 16px 40px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1B6CA8 0%, #0EA5E9 100%)',
        'gradient-soft': 'linear-gradient(135deg, #EBF4FF 0%, #F0F9FF 100%)',
      },
    },
  },
  plugins: [],
}