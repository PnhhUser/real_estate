/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F6F6F6",
        "clr-main": `hsl(28,91%,54%)`,
      },
    },
  },
  plugins: [],
};
