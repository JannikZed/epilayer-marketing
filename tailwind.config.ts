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
        canvas: "#F7F6F2",
        surface: "#FFFFFF",
        ink: "#1C1B19",
        muted: "#5E5A54",
        line: "#E4E0D8",
        accent: "#C45C26",
        ok: "#2F6B4F",
        warn: "#A15C12",
        info: "#DCE8E4",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        card: "10px",
        control: "6px",
      },
      maxWidth: {
        site: "1080px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28, 27, 25, 0.04), 0 8px 24px rgba(28, 27, 25, 0.04)",
      },
      keyframes: {
        "scan-y": {
          "0%": { top: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "scan-x": {
          "0%": { left: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        "hl-flash": {
          "0%": { backgroundColor: "rgba(196, 92, 38, 0.28)" },
          "100%": { backgroundColor: "rgba(196, 92, 38, 0.12)" },
        },
      },
      animation: {
        "scan-y": "scan-y 1.6s ease-in-out forwards",
        "scan-x": "scan-x 1.8s ease-in-out forwards",
        "fade-up": "fade-up 0.35s ease-out forwards",
        "pulse-soft": "pulse-soft 1.2s ease-in-out infinite",
        "hl-flash": "hl-flash 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
