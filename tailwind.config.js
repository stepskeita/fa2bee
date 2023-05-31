/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        beeYellow: "#E9AB17",
        beeBlack: "#000",
        lightBeeYellow: "#FDE8BC",
        customYellow: "#ffee5c",
        customBlack: "#2b2c30",
        customDark: "#212529",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
