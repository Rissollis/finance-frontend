/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        financePlex: ["IBM Plex Sans", "sans-serif;"],
      },
      maxWidth: {
        "2700px": "168.75",
        "200px": "8rem",
      },
      colors: {
        blackBg: "#1A1A1A",
        dourado: "#A5834E",
        douradoHover: "#a5844ec9",
        douradoActive: "#b88b42",
      },
    },
  },
  plugins: [],
};
