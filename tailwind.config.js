/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        violet: "#1e1645",
        pink: "#ede7f6",
        white: "#fff",
        green: "#a7f6a7",
      },
    },
  },
  plugins: [],
};
