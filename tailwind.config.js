/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#4A0A45',        // Primary institutional plum
          purpleLight: '#65125E',   // Plum hover / accent
          purpleMuted: '#F4EDF3',   // Soft plum tint for badges/cards
          magenta: '#C92A54',       // Refined crimson/rose accent
          teal: '#0F766E',          // Refined dark teal accent
          tealLight: '#E6F4F1',     // Soft teal tint
          cream: '#FAF8F5',         // Warm alabaster / cream background
          stone: '#F3EFEA',         // Soft stone for card backgrounds
          dark: '#140D14',          // Dark section background
          darkMuted: '#221822',     // Dark card surface
          textDark: '#1C1917',      // Primary dark text (charcoal)
          textMuted: '#57534E',     // Secondary text
          textLight: '#FAF8F5',     // Light text
          border: '#E7E2DA',        // Subtle border
        }
      },
      borderColor: {
        brand: {
          border: '#E7E2DA',
          purple: '#4A0A45',
          magenta: '#C92A54',
          teal: '#0F766E',
        }
      },
      fontFamily: {
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(74, 10, 69, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(74, 10, 69, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'dropdown': '0 10px 40px -4px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}

