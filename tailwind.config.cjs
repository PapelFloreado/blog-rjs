/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-home': "url('src/assets/img/home.jpg')"
      }
    },
  },
  plugins: [],
}
