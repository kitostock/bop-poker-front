module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
