/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        pink: {
          50: '#fff1f5',
          100: '#ffe4ed',
          700: '#be185d',
        },
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgb(15 23 42 / 0.07)',
        card: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px -1px rgb(15 23 42 / 0.06)',
        nav: '0 1px 0 0 rgb(15 23 42 / 0.06)',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
    },
  },
  plugins: [],
}
