
/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {

    extend: {

      colors: {

        background: "#F6F6F6",

        panel: "#ffffff",

        muted: "#555555",

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



