/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      transform: {
        '3d-hover': 'perspective(250px) rotateX(10deg) translateY(-5%) translateZ(0)',
      }
    },
  },
  plugins: [],
};