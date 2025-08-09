/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "fills-secondary": "rgba(120, 120, 128, 0.16)",
          "foundation-grey-scale-g200": "#d2d2d2",
          "foundation-primary-scale-p300": "var(--primary-300)",
          "foundation-neutral-scale-n0": "#fff",
          "foundation-grey-scale-g50": "#fafafa",
          "foundation-neutral-scale-n900": "#071f36",
          "foundation-grey-scale-g500": "#7b7b7b",
          "foundation-neutral-scale-n1000": "#0d0e12",
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
  