/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#6366f1',
        'secondary': '#3730a3',
        'accent': '#8b5cf6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
