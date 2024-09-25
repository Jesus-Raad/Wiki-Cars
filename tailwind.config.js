/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};