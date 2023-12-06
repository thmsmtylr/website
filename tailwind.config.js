const defaultTheme = require("tailwindcss/defaultTheme");
const presets = require("@emryui/presets"); // Dad, What is this?

module.exports = {
  presets: [presets],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@emryui/react-button/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "gradient-yt": [
          `linear-gradient(45deg, ${theme("colors.teal.700")}, ${theme(
            "colors.primary.800"
          )}, ${theme("colors.error.700")}), linear-gradient(45deg, ${theme(
            "colors.teal.700"
          )}, ${theme("colors.violet.600")}, ${theme("colors.orange.400")})`,
        ],
        "gradient-shopify": [
          "linear-gradient(180deg, #ffffff12 80%, #ffffff26)",
        ],
      }),
      boxShadow: {
        shopify:
          "0rem 0.125rem 0rem 0rem #fff3 inset,0.125rem 0rem 0rem 0rem #fff3 inset,-0.125rem 0rem 0rem 0rem #fff3 inset,0rem -0.0625rem 0rem 0.0625rem #000 inset,0rem 0.0625rem 0rem 0rem #000 inset",
      },
    },
    keyframes: {
      animateIn: {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      in: "animateIn 1s ease-in-out",
    },
  },
  plugins: [],
};
