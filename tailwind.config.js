/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e1faf1',
        textColor: '#111827',
        lightTextDark: '#c5d9d1',
      },
      fontFamily: {
        heading: ['Anton'],

      }
    },
  },
  plugins: [],
}