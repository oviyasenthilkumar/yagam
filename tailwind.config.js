/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans], // Include fallback fonts
      },
      colors: {
        primary: "#4D2623",
        secondary: "#f9f5f0",
      },
    },
  },
  plugins: [],
};
