/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        secondary: "#16a34a",
        dark: "#050816",
        card: "#0f172a"
      },

      borderRadius: {
        xl: "18px"
      }
    }
  },

  plugins: []
};
