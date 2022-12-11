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
        "tilt-shaking": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 3s linear infinite",
        "tilt-shaking": "tilt-shaking 500ms linear 1",
      },
      boxShadow: {
        myshadow: "5px 0px 10px 10px #DFE2E6",
      },
      colors: {
        navy: "rgb(0,0,128)",
      },
    },
  },
  plugins: [],
};
