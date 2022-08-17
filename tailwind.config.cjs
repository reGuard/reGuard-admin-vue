/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
    {
      transparent: 'transparent',
      primary: '#0169FF',
    }
    },
   
  },
  plugins: [],
}