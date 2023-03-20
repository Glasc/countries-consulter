/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // daisyUI config (optional)
  daisyui: {
    themes: ["dark", "winter"],
  },
  plugins: [require("daisyui")],
}
