/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1280px',
      },
      colors: {
        // Core Brand Colors
        primary: {
          DEFAULT: '#006e2f',
          light: '#4ae176',
          dark: '#004b1e',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#ffffff',
          muted: '#f2f4f6',
          subtle: '#f7f9fb',
        },
        // Text Colors
        text: {
          primary: '#191c1e',
          secondary: '#38485d',
          muted: '#565e74',
          light: '#ffffff',
          brand: '#006e2f',
          black: '#000000',
        },
        // Background Colors
        neutral: {
          bg1: '#f7f9fb',
          bg2: '#e6e8ea',
          bg3: '#191c1e', // Dark bg for the mobile promo section
        },
        // Layout Colors
        header: {
          background: '#ffffff',
        },
        footer: {
          background: '#ffffff',
          border: '#e0e3e5',
        },
        border: {
          primary: '#bccbb9',
          regular: '#e0e3e5',
          strong: '#bccbb9',
        },
        // Buttons
        button: {
          dark: { text: '#ffffff' },
          secondary: { bg: '#e6e8ea', text: '#191c1e' }
        },
        // Status Colors
        status: {
          error: '#ba1a1a',
          success: '#22c55e',
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '8xl': '4rem',
      },
      spacing: {
        '5xl': '3rem',
        '6xl': '4rem',
        '8xl': '6rem',
        '10xl': '8rem',
        '11xl': '10rem',
      },
    },
  },
  plugins: [],
}