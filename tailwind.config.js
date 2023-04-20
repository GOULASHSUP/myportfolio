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
        darkgray: "#a0a0a0",
        lightgray: "#e3e3e3",
        background: "#232323",
        background2: "#393939",
        purple: "#D337D3",
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}

