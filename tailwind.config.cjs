/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // daisyUI config (optional)
  daisyui: {
    themes: ["dark", "light"],
  },
  plugins: [require("daisyui")],
}
