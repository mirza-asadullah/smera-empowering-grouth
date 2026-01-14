/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        panel: "#111111",
        muted: "#9aa3a0",
        accent: {
          DEFAULT: "#1ed07a",
          dark: "#138a4f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
