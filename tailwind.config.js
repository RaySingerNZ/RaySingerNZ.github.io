module.exports = {
  darkMode: 'class',
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
