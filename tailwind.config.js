module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')], //cos it isnt part of tailwind. we installed it separately
}
