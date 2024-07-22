/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "4xl": [
        "2rem", // 32 px
        {
          lineHeight: "2.5rem", // 40 px
        },
      ],
      "3xl": [
        "1.875rem", // 30 px
        {
          lineHeight: "2.25rem", // 36 px
        },
      ],
      "2xl": [
        "1.5rem", // 24 px
        {
          lineHeight: "2rem", // 32 px
        },
      ],
      xl: [
        "1.25rem", // 20 px
        {
          lineHeight: "1.75rem", // 28 px
        },
      ],
      lg: [
        "1.125rem", // 18 px
        {
          lineHeight: "1.75rem", // 28 px
        },
      ],
      md: [
        "0.875rem", // 16 px
        {
          lineHeight: "1.5rem", // 24 px
        },
      ],
      sm: [
        "0.875rem", // 14 px
        {
          lineHeight: "1.25rem", // 20 px
        },
      ],
      xs: [
        "0.75rem", // 12 px
        {
          lineHeight: "1rem", // 16 px
        },
      ],
      "2xs": [
        "0.625rem", // 10 px
        {
          lineHeight: "0.75rem", // 12 px
        },
      ],
      "3xs": [
        "0.5rem", // 8 px
        {
          lineHeight: "0.625rem", // 10 px
        },
      ],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: "0.188em",
      widest: ".25em",
    },
    fontFamily: {
      sans: ['"Product Sans"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-image-primary":
          "linear-gradient(100deg, rgba(167, 43, 84, 0.50) 0%, rgba(197, 113, 62, 0.50) 100%), url('/src/assets/home/dots.png')",
      },
      colors: {
        "primary-soft": "#B44B4A",
        "primary-main": "#A72B54",
        "primary-bold": "#88163C",

        "secondary-main": "#C5713E",
        "secondary-bold": "#AD5B2A",

        "neutral-main": "#515151",

        "neutral-soft": "#939393",
        "neutral-soft2x": "#D9D9D9",
        "neutral-soft3x": "#E8E8E8",
        "neutral-soft4x": "#FDFDFD",

        "neutral-bold": "#1B1B1B",
        "neutral-bold2x": "#131313",
        "neutral-bold3x": "#0E0E0E",
      },
    },
    plugins: [
      plugin(function ({ addVariant }) {
        addVariant("current", "&.active");
      }),
    ],
  },
  plugins: [],
};
