/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        green: "#5EFF99",
        darkgray: "#707070",
        lightgray: "#e3e3e3",
        background: "#232323",
        purple: "#D337D3",
      }
    },
  },
  plugins: [],
}

