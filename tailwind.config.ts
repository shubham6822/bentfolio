import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F9F1F0",
        "primary": "#000",
        "secondary": "#5c5c5a",
      },
      fontFamily: {
        "gilroy-regular": ["Gilroy-regular", "sans-serif"],
        "gilroy-semibold": ["Gilroy-SemiBold", "sans-serif"],
        "gilroy-italic": ["Gilroy-Italic", "sans-serif"],
      },

    },
  },
  plugins: [],
} satisfies Config;
