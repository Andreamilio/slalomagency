import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        bg: "#080810",
        surface: "#0d0d1c",
        lime: "#c8ff00",
        violet: "#7b2fff",
        cyan: "#00e5ff",
        coral: "#ff4d6d",
        orange: "#ff6b00",
      },
    },
  },
  plugins: [],
};
export default config;
