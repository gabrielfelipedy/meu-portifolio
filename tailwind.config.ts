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

        section_xl: "18pt",
        section_lg: "17pt",
        section_md: "16pt",
        section_sm: "15pt",
        section: "14pt",

        small_xl: "14pt",
        small_lg: "13.5pt",
        small_md: "13pt",
        small_sm: "12.5pt",
        small: "12pt",
      }
    },
  },
  plugins: [],
} satisfies Config;
