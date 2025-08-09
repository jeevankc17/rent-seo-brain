/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "Fills-Secondary": "rgba(120, 120, 128, 0.16)",
          "Foundation-Grey-Scale-G200": "#d2d2d2",
          "Foundation-Primary-Scale-P300": "#1d8fff",
          "Foundation-Neutral-Scale-N0": "#fff",
          "Foundation-Grey-Scale-G50": "#fafafa",
          "Foundation-Neutral-Scale-N900": "#071f36",
          "Foundation-Grey-Scale-G500": "#7b7b7b",
          "Foundation-Neutral-Scale-N1000": "#0d0e12",
          gray: {
            100: "#091e42",
            200: "rgba(255, 255, 255, 0.7)",
            300: "rgba(255, 255, 255, 0.01)",
            400: "rgba(123, 123, 123, 0.22)",
          },
          black: "#000",
          red: "#e61a1a",
          mediumseagreen: "#00b45c",
          yellowgreen: "#d8fd5f",
        },
        fontFamily: {
          urbanist: "Urbanist",
        },
      },
      lineHeight: {
        nav: "23px",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  