/** @type {import('tailwindcss').Config} */
const daisyUi = require("daisyui");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      popins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [daisyUi],
}