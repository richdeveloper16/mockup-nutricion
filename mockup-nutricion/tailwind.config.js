/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto es vital para que lea tus componentes
  ],
  theme: {
    extend: {
      colors: {
        'nutri-green': '#8E9775',
        'nutri-dark': '#556B2F',
        'nutri-orange': '#E28743',
      }
    },
  },
  plugins: [],
}