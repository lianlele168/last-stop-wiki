import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wasteland: {
          950: "#050811",
          900: "#091022",
          800: "#101d3b",
          700: "#1b2e59",
          600: "#27427d",
          500: "#385fa8",
          400: "#5a84cc",
        },
        diesel: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        hazard: {
          emerald: "#10b981",
          crimson: "#ef4444",
          amber: "#f59e0b",
          cyan: "#06b6d4",
          purple: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Consolas", "Courier New", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(245, 158, 11, 0.35)",
        "glow-lg": "0 0 40px -10px rgba(245, 158, 11, 0.5)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.4)",
        "glow-red": "0 0 25px -5px rgba(239, 68, 68, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
