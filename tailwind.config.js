/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add any other file paths where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3e0b3',
        accent: '#ee5e5e',
        highlight: '#f1c40f',
      },
    },
  },
  plugins: [],
}