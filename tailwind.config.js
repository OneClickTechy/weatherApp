/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      // Background colors
      background: {
        light: "#fefefe",
        lighter: "#f5f5f5",
        lightest: "#f2f2f2",
        blue1: "#44a3ff",
        blue2: "#0095ff",
        blue3: "#1e90ff",
        navy1: "#35455e",
        navy2: "#202b3b",
        dark: "#0b131e",
        darkest: "#030303",
      },
      // Text colors
      text: {
        white: "#ffffff",
        light: "#f5f5f5",
        lighter: "#f0f1f1",
        lightGray: "#dde0e4",
        gray: "#c4cad3",
        darkGray: "#9399a2",
        dark: "#030303",
        black: "#000000",
      },
      // Contrast colors
      contrast: {
        blue1: "#44a3ff",
        blue2: "#0095ff",
        navy: "#202b3b",
      },
      // Fill colors
      fill: {
        lightGray: "#f0f1f1",
        gray: "#9399a2",
      },
      // Border colors
      border: {
        lightGray: "#eeeeee",
        lighterGray: "#e8e8e8",
      },
    },
  },
  plugins: [],
};
