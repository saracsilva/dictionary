/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "dark-blue": "#263d42",
        "light-blue": "#7698b3",
        "light-yellow": "#f5f1e0",
        grey: "#dcdde4",
        "medium-grey": "#f0f1f7",
        "light-grey": "#f8f6f1",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      content: {
        play: "url('./assets/play_icon.svg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontSize: {
      sm: ["14px"],
      base: ["16px"],
      lg: ["20px"],
      xl: ["24px"],
      "4xl": ["36px"],
      "6xl": ["60px"],
      "7xl": ["100px"],
      "8xl": ["150px"],
      "9xl": [
        "15em",
        {
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
