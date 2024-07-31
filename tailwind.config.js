/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "3xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "4xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "5xl": "1650px",
    },
    extend: {
      fontFamily: {
        fontHead: ['"Unageo"', "sans-serif"],
        fontText: ['"Aileron"', "sans-serif"],
      },
      colors: {
        neutral: {
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#879693",
          600: "#868E96",
          700: "#535F5D",
          800: "#323938",
          900: "#212529",
        },
        primary: {
          50: "#EAFFFB",
          100: "#C2FFFC",
          200: "#91FFF8",
          300: "#49F7E0",
          400: "#00D9A6",
          500: "#00644F",
          600: "#005845",
          700: "#003F31",
          800: "#00261E",
          900: "#003D3A",
        },
        secondary: {
          50: "#FFFBF5",
          100: "#FEF3E2",
          200: "#FEE7C6",
          300: "#FDDBA9",
          400: "#FDD08C",
          500: "#FBB040",
          600: "#FAA019",
          700: "#C17504",
          800: "#744602",
          900: "#271701",
        },
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        shades: {
          0: "#FFFFFF",
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#868E96",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
          1000: "#000000",
        },
        dark: {
          50: "#F8F9FA",
          100: "#E9ECEF",
          200: "#DEE2E6",
          300: "#CED4DA",
          400: "#ADB5BD",
          500: "#868E96",
          600: "#495057",
          700: "#343A40",
          800: "#1F2431",
          900: "#121619",
        },
      },
    },
  },
  plugins: [],
};
