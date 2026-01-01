/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
	theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      fontFamily: {
        // Primary: Space Grotesk - Modern geometric sans-serif for visual impact
        display: ['var(--font-space-grotesk)', ...defaultTheme.fontFamily.sans],
        
        // Secondary: Inter - Default body font for optimal readability
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        
        // Monospace: JetBrains Mono - For code and technical content
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        white: "#FFFFFF",
        black: "#212b36",
        "dark-700": "#090e34b3",
        dark: {
          DEFAULT: "#111928",
          2: "#1F2A37",
          3: "#374151",
          4: "#4B5563",
          5: "#6B7280",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        primary: "#3758F9",
        "blue-dark": "#1B44C8",
        secondary: "#13C296",
        "body-color": "#637381",
        "body-secondary": "#8899A8",
        warning: "#FBBF24",
        stroke: "#DFE4EA",
        "gray-1": "#F9FAFB",
        "gray-2": "#F3F4F6",
        "gray-7": "#CED4DA",
        
        // New Blue, Teal & Charcoal Theme
        "theme-blue": {
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#2196F3",
          600: "#1E88E5",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1",
        },
        "theme-cyan": {
          50: "#E0F2F1",
          100: "#B2DFDB",
          200: "#80CBC4",
          300: "#4DB6AC",
          400: "#26A69A",
          500: "#009688",
          600: "#00897B",
          700: "#00796B",
          800: "#00695C",
          900: "#004D40",
        },
        "theme-charcoal": {
          50: "#F5F5F5",
          100: "#EEEEEE",
          200: "#E0E0E0",
          300: "#BDBDBD",
          400: "#9E9E9E",
          500: "#757575",
          600: "#616161",
          700: "#424242",
          800: "#2C2C2C",
          900: "#1A1A1A",
        },
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
