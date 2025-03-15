
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        incite: {
          blue: {
            DEFAULT: "var(--incite-blue)",
            dark: "var(--incite-blue-dark)",
            light: "var(--incite-blue-light)",
          },
          purple: {
            DEFAULT: "var(--incite-purple)",
            dark: "var(--incite-purple-dark)",
            light: "var(--incite-purple-light)",
          },
          orange: {
            DEFAULT: "var(--incite-orange)",
            dark: "var(--incite-orange-dark)",
            light: "var(--incite-orange-light)",
          },
          teal: {
            DEFAULT: "var(--incite-teal)",
            dark: "var(--incite-teal-dark)",
            light: "var(--incite-teal-light)",
          },
          pink: {
            DEFAULT: "var(--incite-pink)",
            dark: "var(--incite-pink-dark)",
            light: "var(--incite-pink-light)",
          },
          green: {
            DEFAULT: "var(--incite-green)",
            dark: "var(--incite-green-dark)",
            light: "var(--incite-green-light)",
          },
          cyan: {
            DEFAULT: "var(--incite-cyan)",
            dark: "var(--incite-cyan-dark)",
            light: "var(--incite-cyan-light)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
