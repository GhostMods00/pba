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
          DEFAULT: '#000000',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#666666',
          light: '#999999',
          dark: '#444444',
        }
      },
    },
  },
  plugins: [],
}