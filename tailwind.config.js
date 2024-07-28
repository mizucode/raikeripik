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
      },
    },
  },
  plugins: [],
};
