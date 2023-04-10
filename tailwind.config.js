/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        financePlex: ['Be Vietnam Pro', "sans-serif",],
      },
      maxWidth: {
        "2700px": "168.75",
        "200px": "8rem",
      },
      colors: {
        white: "#ffffff",
        honeyDew: "#e8fcf2",
        lightSeaGreen: "#20b2aa",
        smokyBlack: "#131200",
        midnightGreen: "#095256",
      },
    },
  },
  plugins: [],
};
