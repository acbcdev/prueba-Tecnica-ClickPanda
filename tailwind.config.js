import { card, heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        border: "var(--border)",
        card: "var(--card)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            // background: "#e8f4fc",
            divider: "#c3c3c3",
            foreground: "#001042",
            content1: "#e8f4fc",
            secondary: {
              DEFAULT: "#ff7f22",
              secondary: "#ff7f22",
              500: "#fea259",
            },
            primary: {
              500: "#1d77c0",
              DEFAULT: "#4a77ba",
            },
          },
        },
        dark: {
          colors: {
            background: "#111521",
            primary: {
              DEFAULT: "#1d77c0",
              500: "#4a77ba",
            },
            secondary: {
              DEFAULT: "#ff7f22",
              secondary: "#ff7f22",
              500: "#fea259",
            },
            content1: "#1d212c",
            foreground: "#e8f4fc",
          },
        },
      },
    }),
  ],
};

module.exports = config;
