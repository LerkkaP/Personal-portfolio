/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      blur: {
        sm: '3px'
      },
      colors: {
        "secondary-color": "var(--secondary-color)",
      }
    },
  },
  plugins: [],
};
