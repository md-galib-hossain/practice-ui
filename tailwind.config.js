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
          light: '#8ecae6',
          DEFAULT: '#219ebc',
          dark: '#023047',
        },
        secondary: {
          light: '#ffb703',
          DEFAULT: '#fb8500',
          dark: '#9a3412',
        },
        neutral: {
          light: '#f5f5f5',
          DEFAULT: '#e0e0e0',
          dark: '#333333',
        },
      },
    },
  },
  plugins: [],
}