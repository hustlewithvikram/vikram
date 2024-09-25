import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
      },
      borderRadius: {
        "4xl" : "2rem",
        "5xl" : "2.5rem",
        "6xl" : "3rem",
        "7xl" : "3.5rem",
        "10xl" : "5rem"
      }
    },
  },
  plugins: [],
};
export default config;
