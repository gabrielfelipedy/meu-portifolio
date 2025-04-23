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
      screens: {
        'xs': '480px', 
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        dark: {
          "000": "#000000",
          "100": "#252525",
          "200": "#0a0a0a",
          "300": "#0d1117",
          "400": "#151312",
          "500": "#353334",
          "600": "#747373",
        },
        light: {
          "400": "#e48f4f",
          "500": "#464646",
          "700": "#626464",
          "800": "#cccccc",
          "900": "#f8f8f8",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        monoglyphic: ["monoglyphic", "sans-serif"]
      },
      fontSize: {
        title_xl: "70pt",
        title_lg: "60pt",
        title_md: "45pt",
        title_sm: "45pt",
        title: "35pt",
        subtitle_xl: "30pt",
        subtitle_lg: "25pt",
        subtitle_md: "23pt",
        subtitle_sm: "20pt",
        subtitle: "18pt",
        section_xl: "18pt",
        section_lg: "17pt",
        section_md: "14pt",
        section_sm: "13pt",
        section: "14pt",
        small_xl: "14pt",
        small_lg: "13.5pt",
        small_md: "13pt",
        small_sm: "12.5pt",
        small: "12pt",
      },
      boxShadow: {
  			'light-100': '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px',
  			'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
  			'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10',
  			'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
  			'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)'
  		},
      backgroundImage: {
        hero: "url('/assets/img/me.webp')",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
