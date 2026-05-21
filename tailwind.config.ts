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
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        card: "var(--card)",
        ring: "var(--ring)",
        white: "var(--foreground)",
        black: "var(--background)",
        slate: {
          50: "#002233",
          100: "#002a40",
          200: "#003b5c",
          300: "#FDF0D5",
          400: "#FDF0D5",
          500: "#00679C",
          600: "#004B73",
          700: "#004060",
          800: "#003b5c",
          900: "#003049",
          950: "#001c2b",
        }
      },
    },
  },
  plugins: [],
};

export default config;
