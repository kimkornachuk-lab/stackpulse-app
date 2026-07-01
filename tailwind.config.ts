import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mar: {
          bg: "#FFFFFF",
          card: "#FAFAFA",
          border: "#E8E4F0",
          accent: "#7C6BAF",
          coral: "#D4836B",
          teal: "#5BA3A0",
          gold: "#C9A84C",
          blush: "#D4A0B0",
          text: "#1E1E2E",
          muted: "#6B7280",
          subtle: "#F3F0F8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px rgba(124, 107, 175, 0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 32px rgba(124, 107, 175, 0.12), 0 2px 8px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
