/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,ts,tsx}", "./components/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["Fuzzy Bubbles", "cursive"],
        "fira-code": ["Fira Code", "monospace"],
      },
      colors: {
        primary: "#125df3",
        secondary: "#151515",
      },
    },
  },
  plugins: [],
};
