import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        text: "var(--color-text)",
        primary: "var(--color-primary)"
      },
    },
  },
  plugins: [],
};
export default config;
