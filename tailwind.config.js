/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#fff",
      },
      fontSize: {
        fontsize1: "1rem",
      },
    },
    screens: {
      xs: { max: "359px" },
      sm: { max: "767px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
