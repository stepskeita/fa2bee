/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        beeYellow: "#F3D82C",
        beeBlack: "#000",
        lightBeeYellow: "#E9AB17",
        customYellow: "#FDE8BC",
        customBlack: "#2b2c30",
        customDark: "#212529",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
