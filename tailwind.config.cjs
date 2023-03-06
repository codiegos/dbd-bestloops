/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        dbd: 'url("assets/dbd-bg.png")'
      },
      fontFamily: {
        creepster: ['Creepster', 'cursive'],
        marcellus: ['Marcellus SC', 'serif']
      }
    },
    animation: {
      text: 'text 5s ease infinite'
    },
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 400%',
          'background-position': 'bottom left'
        },
        '50%': {
          'background-size': '400% 200%',
          'background-position': 'top right'
        }
      }
    }
  },
  plugins: []
}
