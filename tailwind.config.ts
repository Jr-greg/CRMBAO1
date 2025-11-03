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
      colors: {
        primary: {
          DEFAULT: "#0EA5E9",
          light: "#22D3EE",
          dark: "#0284C7",
        },
        warning: "#F59E0B",
        danger: "#EF4444",
        background: {
          light: "#FFFFFF",
          dark: "#0A0E1A",
        },
        card: {
          light: "#F8FAFC",
          dark: "#131827",
        },
        border: {
          light: "#E2E8F0",
          dark: "#1E293B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(30px, -30px) scale(1.1)" },
          "50%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "75%": { transform: "translate(40px, 10px) scale(1.05)" },
        },
        "float-slow-reverse": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-40px, 30px) scale(0.95)" },
          "50%": { transform: "translate(30px, -20px) scale(1.1)" },
          "75%": { transform: "translate(-30px, -10px) scale(0.9)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        "float-slow": "float-slow 25s ease-in-out infinite",
        "float-slow-reverse": "float-slow-reverse 30s ease-in-out infinite",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;


