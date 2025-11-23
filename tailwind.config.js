/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#2F7CF6',
        'deep-black': '#0A0A0A',
      },
    },
  },
  plugins: [],
}

