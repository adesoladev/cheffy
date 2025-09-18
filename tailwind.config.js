/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#282624",
          200: "#facb3b",
        },
        secondary: {
          100: "#f4f3f1",
          200: "#000000",
        },
        accent: {
          200: "#ffffff",
        },
      },
      fontFamily: {
        body: ["Poppins", "Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
