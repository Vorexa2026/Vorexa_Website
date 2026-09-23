import type { Config } from "tailwindcss";

// Vorexa Brand Identity & Product System v2.1 — section 03 "Visual tokens".
const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F44", // Deep Navy — corporate foundation and dark UI
        midnight: "#071426", // Hero depth and premium backgrounds
        panel: "#102B4F", // Panel Navy — cards and application surfaces
        blue: "#007AFF", // Electric Blue — master digital action colour
        cyan: "#00E5FF", // Signal highlight and Vorexa glow
        "atlas-bronze": "#B87333",
        "atlas-gold": "#E2A85B",
        "core-teal": "#0FAE9C",
        "core-mint": "#29E0CF",
        charcoal: "#1A1D24",
        offwhite: "#F7FAFC",
        border: "#D0D5DD",
        muted: "#667085",
        coolgray: "#A7B5C8",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "12px",
        panel: "16px",
      },
      spacing: {
        4.5: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
