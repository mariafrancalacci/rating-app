module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fonts: {
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        background: {
          300: "#FFFFFF",
          500: "#F0F0F0",
        },
        default: {
          orange: "#FB7718",
          white: "#FFFFFF",
          lightgrey: "#959EAC",
          mediumgrey: "#7C8798",
          darkblue: "#252D37",
          verydarkblue: "#121417",
        },
      },
    },
  },
  plugins: [],
};
