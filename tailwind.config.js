/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/function.js",
  ],
  theme: {
    extend: {
      height: {
        '1/10': '10%',
        '1.5/10': '15%',
        '9/10': '90%',
        '8.5': '85%',
      }
    },
  },
  plugins: [],
}

