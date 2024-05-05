/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "yellow-essentials": "#F1ED94",
        "green-essentials": "#D1EADC",
        "blue-essentials": "#B2D4F3",
        "red-assets": "#E07A5F",
        "pink-assets": "#EAB6C1",
        "dark-blue-assets": "#3D405B",
        "techno-white": "#F4ECE9",
        "techno-black": "#13120F",
      },
      boxShadow: {
        "techno-btn": "4px 4px 0px #000",
        "techno-asset": "8px 8px 0px #000",
      },
      textStrokeColor: {
        black: "#000",
      },
      textStroke: {
        "2px": "2px",
        "3px": "3px",
      },
      fontFamily: {
        "sg-regular": ["SGRegular", "sans-serif"],
        "sg-bold": ["SGBold", "sans-serif"],
      },
      backgroundImage: {
        // "rb-grn": "url('/public/images/green-bg-top.svg')",
        "techno-elipse": "url('/public/images/techno-elipse-bg.svg')",
        medpar: "url('/public/images/bg-medpar.svg')",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
