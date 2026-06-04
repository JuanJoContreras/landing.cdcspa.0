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
        brand: {
          blue: "#1A3C5E",
          "blue-mid": "#2563A8",
          "blue-light": "#3B82C4",
          gray: "#1C1C1E",
          "gray-mid": "#4A4A4A",
          "gray-light": "#8A8A8E",
          "gray-bg": "#F5F5F7",
          accent: "#16A34A",
          "accent-hover": "#15803D",
          white: "#FFFFFF",
          cta: "#EA580C",
          "cta-hover": "#C2410C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay":
          "linear-gradient(135deg, rgba(26,60,94,0.85) 0%, rgba(26,60,94,0.60) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 2px 20px 0 rgba(0,0,0,0.07)",
        "card-hover": "0 8px 40px 0 rgba(26,60,94,0.15)",
        cta: "0 4px 24px 0 rgba(234,88,12,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
