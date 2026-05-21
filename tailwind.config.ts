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
        background: "#f2f2f2",
        foreground: "#000000",
        accent: "#b6b09f",
        "accent-foreground": "#000000",
        muted: "#eae4d5",
        border: "#b6b09f",
        card: "#f2f2f2",
        ring: "rgba(182, 176, 159, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
