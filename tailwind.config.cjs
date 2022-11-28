/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-home': "url('home.jpg')"
      }
    },
  },
  plugins: [],
}
