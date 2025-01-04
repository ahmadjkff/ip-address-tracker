/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./images/pattern-bg-desktop.png')",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
      colors: {
        "Very-Dark-Gray": "hsl(0, 0%, 17%)",
        "Dark-Gray": "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
