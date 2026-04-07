import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        border: "#1e1e1e",
        accent: "#00ff87",
        "accent-dim": "#00cc6a",
        muted: "#666666",
        text: "#e8e8e8",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
