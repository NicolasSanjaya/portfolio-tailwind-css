/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      width: {
        "1/2": "50%",
      },
      screens: {
        "2xl" : "1320px",
      },
    },
  },
  plugins: [],
};
