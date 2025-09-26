import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
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
			backgroundColor: {
				background: "var(--background-color)",
				themeColor: "var(--theme-color)",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				lily: ["Lily Script One"],
				"fugaz-one": ["Fugaz One"],
				bebas: ["Bebas Neue", "cursive"],
				princess: ["Princess Sofia", "serif"],
				poppins: ["Poppins", "sans-serif"],
				climate: ["Climate Crisis", "sans-serif"],
				questrial: ["Questrial", "sans-serif"],
			},
			borderRadius: {
				"4xl": "2rem",
				"5xl": "2.5rem",
				"6xl": "3rem",
				"7xl": "3.5rem",
				"10xl": "5rem",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				themeColor: "#f5fbfe",
			},
			animation: {
				ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
			},
			keyframes: {
				ripple: {
					"0%, 100%": {
						transform: "translate(-50%, -50%) scale(1)",
					},
					"50%": {
						transform: "translate(-50%, -50%) scale(0.9)",
					},
				},
			},
			backdropBlur: {
				sm: "4px",
			},
			clipPath: {
				// rounded nonagon (example)
				"nonagon-rounded":
					"path('M 150,0 L 260,50 A 20,20 0 0 1 280,80 L 290,150 A 20,20 0 0 1 270,180 L 230,250 A 20,20 0 0 1 200,260 L 100,260 A 20,20 0 0 1 70,250 L 30,180 A 20,20 0 0 1 10,150 L 20,80 A 20,20 0 0 1 40,50 Z')",
			},
		},
	},
	plugins: [require("tailwind-clip-path")],
};
export default config;
