/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'my-shadow' : '0 0 10px rgba(0,0,0,0.2)'
      },
      gridTemplateColumns: {
        'my-grid': 'repeat(auto-fit, minmax(250px, 1fr))'
      }

    },
  },
  plugins: [],
}

