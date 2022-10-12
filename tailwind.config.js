/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,ts,tsx}", "./components/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["Style Script", "cursive"],
        "fira-code": ["Fira Code", "monospace"],
      },
      colors: {
        secondary: "#101010",
      },
    },
  },
  plugins: [],
};
