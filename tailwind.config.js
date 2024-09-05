/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-390": "repeat(auto-fill, minmax(50px, 390px))",
        "auto-fit-390": "repeat(auto-fit, minmax(50px, 390px))",
        "auto-fill-50": "repeat(auto-fill, minmax(50px, 1fr))",
        "auto-fit-50": "repeat(auto-fit, minmax(50px, 1fr))",
      },
    },
  },
  plugins: [],
};

plugins: [require("daisyui")];
