import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        accent: "#2563eb",
        "accent-foreground": "#ffffff",
        muted: "#f1f5f9",
        border: "#e2e8f0",
        card: "#ffffff",
        ring: "rgba(37, 99, 235, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
