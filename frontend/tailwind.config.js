/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bazzarioGreen: "#2ecc71",  // custom green
        bazzarioOrange: "#e67e22", // custom orange
      },
    },
  },
  plugins: [],
}
