/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': 'var(--primaryColor)',
        'color-primary-dark': 'var(--primaryColorDark)',
        'color-primary-darker': 'var(--primaryColorDarker)',
        'color-dark-blue': '#071c4d',
        'color-grey': 'rgba(255, 255, 255, .7)',
        'color-grey-soft': '#F5F5F5',
        'color-grey-dark': 'var(--greyColorDark)',
        'color-blue-grey': 'var(--blueGrey)',
        'color-blue-grey-soft': '#f0f2f7',
        'color-iron': '#52525c',
        'color-orange': '#FFB116',
        'darker': '#f8f9fa',
        'color-pink': '#fcdde1',
        'color-blue-light': '#CEDDFF',
        'color-gold': '#fcb900',
        'skeleton': 'rgba(54, 54, 54, 0.205)'
      },
      container: {
        center: true,
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1200px'
        },
        padding: '12px'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease forwards'
      }
    },
  },
  plugins: [],
}
