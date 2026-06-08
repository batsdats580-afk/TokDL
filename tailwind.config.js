/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",   // ⭐ REQUIRED for dark mode toggle
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
