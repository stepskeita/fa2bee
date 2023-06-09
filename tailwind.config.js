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
        laundryPurple: "#5327A8",
        laundryLightPurple: "#BB8CE8",
        salonPink: "#FFBBE5",
        salonPurple: "#BB8CE8",
        salonBlue: "#B4D9EF",
        cleaningPurple: "#5327A8",
        cleaningLightPurple: "#BB8CE8",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
