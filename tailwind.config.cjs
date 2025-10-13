/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff1f5',
          100: '#ffe4ed',
          700: '#be185d',
        },
      },
    },
  },
  plugins: [],
}