/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px", // Small screens like smartphones
      md: "768px", // Medium-sized screens like tablets
      lg: "1024px", // Large screens like laptops
      xl: "1280px",
    },
    extend: {
      colors: {
        whiteAlpha: {
          500: "#0000000a",
          100: "#0000000f",
          200: "#00000014",
          300: "#00000029",
          400: "#0000003d",
          500: "#0000005c",
          600: "#0000007a",
          700: "#000000a3",
          800: "#000000cc",
          900: "#000000eb",
        },

        cream: "#f0e7db",
        darkModeGray: "#202023",
      },
    },
  },
  plugins: [],
};
