/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "custom-primary1": "hsl(35, 77%, 62%);",
        "custom-primary2": "hsl(5, 85%, 63%);",
        "custom-neutral1": "hsl(36, 100%, 99%);",
        "custom-neutral2": "hsl(233, 8%, 79%);",
        "custom-neutral3": "hsl(236, 13%, 42%);",
        "custom-neutral4": "hsl(240, 100%, 5%);",
      },
    },
  },
  letterSpacing: {
    btnwide: '1em',
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
