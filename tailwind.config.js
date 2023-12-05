const defaultTheme = require("tailwindcss/defaultTheme");
const presets = require("@emryui/presets"); // Dad, What is this?

module.exports = {
  presets: [presets],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      }),
    },
  },
  plugins: [],
};
