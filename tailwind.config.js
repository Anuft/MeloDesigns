/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F2EC',
          50: '#FDFCFA',
          100: '#F7F2EC',
          200: '#EFE6DB',
          300: '#E7D9CA',
        },
        beige: {
          DEFAULT: '#E6D7C8',
          light: '#EFE5DA',
          dark: '#D8C3AE',
        },
        mocha: {
          DEFAULT: '#927363',
          light: '#A78B7C',
          dark: '#7D6152',
        },
        darkbrown: {
          DEFAULT: '#302520',
          light: '#453630',
          deep: '#231A16',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#D8C3A5',
          dark: '#A9895B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'ultra': '0.35em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(48, 37, 32, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(48, 37, 32, 0.16)',
        'soft-glow': '0 0 25px rgba(146, 115, 99, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        }
      }
    },
  },
  plugins: [],
}
