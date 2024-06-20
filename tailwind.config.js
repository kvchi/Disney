/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dark: "#708090",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
