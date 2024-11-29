import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
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
      },
      fontSize: {
        title_xl: "70pt",
        title_lg: "65pt",
        title_md: "60pt",
        title_sm: "55pt",
        title: "50pt",
      }
    },
  },
  plugins: [],
} satisfies Config;
