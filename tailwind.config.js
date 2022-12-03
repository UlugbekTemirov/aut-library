/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(-100%, 0)",
          },
        },
      },
      animation: {
        marquee: "marquee 3s linear infinite",
      },
      boxShadow: {
        myshadow: "5px 0px 10px 10px #DFE2E6",
      },
    },
  },
  plugins: [],
};
