import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F44",
        blue: "#1D4ED8",
        electric: "#007AFF",
        cyan: "#00E5FF",
        charcoal: "#1A1D24",
        offwhite: "#F8FAFC",
        border: "#D0D5DD",
        muted: "#667085",
        coolgray: "#94A3B8",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
