/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
