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
        creepster: ['Creepster']
      }

    }
  },
  plugins: []
}
