/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a78bfa', // Tailwind purple-400
          DEFAULT: '#8b5cf6', // Tailwind purple-500
          dark: '#6d28d9', // Tailwind purple-700
        },
        accent: '#f3e8ff', // Tailwind purple-100
      },
    },
  },
  plugins: [],
}