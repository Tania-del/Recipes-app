/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        violet: "#1e1645",
        pink: "#ede7f6",
        white: "#f5f5f5",
        green: "#a7f6a7",
        creme: "#e9e8e8",
        dark: "#8b7b97",
        gray: "#c6c8c6",
        lightGray: "#bbb",
        grayRgba: "rgba(30,31,83,.14)",
        clearWhite: "#FFFFFF",
        dirtyBlue: "#255d79",
        red: "#f13d3d",
        darkGreen: "#3a7d5c",
        lightViolet: "#918ef4",
        black: "#000",
        secondary: "#f8f8f8",
      },

      boxShadow: {
        "3xl": "0 0 5px 2px #fff",
        "4xl": "0 0px 5px 3px #949494",
        recipe: "0 0px 1px 1px #949494",
        favorite: "rgb(148, 148, 148) 0px 2px 5px 3px",
      },
      dropShadow: {
        "3xl": "1px 0 10px #dfbb2a",
      },
      scale: {
        103: "1.03",
      },

      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(192px, 1fr))",
        columns: "repeat(2, 1fr)",
        ingrCol: "repeat(auto-fill, minmax(126px, 1fr))",
        favoriteCol: "repeat(auto-fill, minmax(216px, 1fr))",
      },

      gridTemplateRows: {
        rows: "repeat(2,332px) 1fr",
      },

      padding: {
        "0.3em": "0.3em",
      },
      letterSpacing: {
        tighttest: ".04em",
        tight: ".06em",
        "05": ".05em",
      },
      fontSize: {
        925: ".925rem",
      },
    },
  },
  plugins: [],
};
