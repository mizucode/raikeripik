/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        hero: "url('img/download.jpg')",
      },
      colors: {
        htm: "#131313",
        coklat: "#914F1E",
        cream: "#DEAC80",
        creamwhite: "#F7DCB9",
        sage: "#B5C18E",
      },
    },
  },
  plugins: [],
};
