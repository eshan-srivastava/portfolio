/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('./footer_bg.svg')",
      },
      animation: {
        'gradient' : 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient' : {
          to: { 'background-position': '200% center'}
        }
      }
    },
  },
  plugins: [],
}